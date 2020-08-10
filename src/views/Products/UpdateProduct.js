import React, {useState, useEffect} from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col, FormFeedback,
  FormGroup,
  Input,
  Label, ListGroup, ListGroupItem,
  Progress,
  Row
} from "reactstrap";
import { useAlert } from 'react-alert'
import {API_URL, PRODUCTS_QUANTITY_URL, PRODUCTS_TRANSFERS_URL, PRODUCTS_URL, UNITS_URL} from "../../constants/Api";
import {CircleLoader} from "react-spinners";

function UpdateProduct(props) {
  const alert = useAlert();
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [quantityLoading, setQuantityLoading] = useState(false);
  const [transferLoading, setTransferLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [transferQuantity, setTransferQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [priceValid, setPriceValid] = useState(true);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState({});
  const [selectedFromUnit, setSelectedFromUnit] = useState({});
  const [selectedToUnit, setSelectedToUnit] = useState({});
  const [selectedUnitQuantity, setSelectedUnitQuantity] = useState({});
  const [quantityAction, setQuantityAction] = useState("ADD");
  const [unitQuantity, setUnitQuantity] = useState("");

  useEffect(() => {
    fetchProductById();
  }, []);

  const fetchProductById = () => {
    fetch(PRODUCTS_URL + "/" + props.match.params.id)
      .then(res => res.json())
      .then((productResult) => {
        console.log('Product by id: ', productResult);
        setProduct(productResult);
        setName(productResult.name);
        setPrice(productResult.price);
        if (productResult.image) {
          setImageUrl("data:image/jpeg;base64, " + productResult.image);
        }
        if (productResult.units.length > 0) {
          setSelectedUnitQuantity(productResult.units[0]);
          setSelectedFromUnit(productResult.units[0]);
          productResult.units.length > 1 ? setSelectedToUnit(productResult.units[1]) : setSelectedToUnit(productResult.units[0]);
        }
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log('Fetch products error: ', error);
      })
  };

  const updateFields = (field, event) => {
    if (field === "name") {
      setName(event.target.value);
    } else if (field === "transferQuantity") {
      setTransferQuantity(event.target.value);
    } else if (field === "price") {
      setPrice(event.target.value);
    } else if (field === "image") {
      if (event.target.files && event.target.files.length > 0) {
        setImage(event.target.files[0]);
        setImageUrl(URL.createObjectURL(event.target.files[0]));
      } else {
        setImage(null);
        if (product.image) {
          setImageUrl("data:image/jpeg;base64, " + product.image);
        } else {
          setImageUrl(null);
        }
      }
    } else if (field === "selectedToUnit") {
      console.log('value: ', event.target.value);
      let obj = product.units.find(obj => obj.id == event.target.value);
      console.log('to unit: ', obj);
      setSelectedToUnit(obj);
    } else if (field === "selectedFromUnit") {
      console.log('value: ', event.target.value);
      let obj = product.units.find(obj => obj.id == event.target.value);
      console.log('from unit: ', obj);
      setSelectedFromUnit(obj);
    } else if (field === "selectedUnitQuantity") {
      let obj = product.units.find(obj => obj.id == event.target.value);
      setSelectedUnitQuantity(obj);
    } else if (field === "quantityAction") {
      setQuantityAction(event.target.value);
    } else if (field === "unitQuantity") {
      setUnitQuantity(event.target.value);
    }
  };

  const updateProduct = () => {
    if (checkValidity()) {
      const request = {
        id: product.id,
        name: name,
        price: price
      };

      setDetailsLoading(true);
      fetch(PRODUCTS_URL, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(request)
      })
        .then(handleErrors)
        .then(response => response.json())
        .then(result => {
          setDetailsLoading(false);
          alert.show('Updated product successfully', {
            timeout: 3000,
            type: 'success'
          });
          console.log('Updated product result: ', result);
        })
        .catch(error => {
          setDetailsLoading(false);
          console.log('Updating product error: ', error);
          alert.show('Error: Can not update product', {
            timeout: 5000,
            type: 'error'
          });
        })
    }
  };

  const checkValidity = () => {
    let valid = true;
    if (!name) {
      setNameValid(false);
      valid = false;
    } else {
      setNameValid(true);
    }
    if (!price || Number.parseFloat(price) < 1) {
      setPriceValid(false);
      valid = false;
    } else {
      setPriceValid(true);
    }
    return valid;
  };

  const transferProduct = () => {
    const request = {
      sourceUnitId: selectedFromUnit.id,
      destinationUnitId: selectedToUnit.id,
      productId: product.id,
      quantity: transferQuantity
    };

    setTransferLoading(true);

    fetch(PRODUCTS_TRANSFERS_URL, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(request)
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(result => {
        setTransferLoading(false);
        setProduct(result);
        alert.show('Product transferred successfully', {
          timeout: 3000,
          type: 'success'
        });
        console.log('Product transferred successfully: ', result);
      })
      .catch(error => {
        setTransferLoading(false);
        console.log('Error while transferring product ', error);
        alert.show('Error while transferring product', {
          timeout: 5000,
          type: 'error'
        });
      })
  };

  const updateProductImage = () => {
    setImageLoading(true);
    let formData = new FormData();
    formData.append("image", image);
    fetch(PRODUCTS_URL + '/' + product.id + '/image', {
      method: "PUT",
      body: formData
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(result => {
        setImageLoading(false);
        alert.show('Created product successfully', {
          timeout: 3000,
          type: 'success'
        });
        console.log('Updated product result: ', result);
      })
      .catch(error => {
        setImageLoading(false);
        console.log('Creating product error: ', error);
        alert.show('Product with this name already exist for this unit', {
          timeout: 5000,
          type: 'error'
        });
      })
  };

  const updateQuantity = () => {
    setQuantityLoading(true);
    const request = {
      action: quantityAction,
      unitId: selectedUnitQuantity.id,
      productId: product.id,
      quantity: unitQuantity
    };

    console.log('Update quantity request: ', request);

    fetch(PRODUCTS_QUANTITY_URL, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(request)
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(result => {
        setQuantityLoading(false);
        setProduct(result);
        alert.show('Updated quantity successfully', {
          timeout: 3000,
          type: 'success'
        });
        console.log('Updated product result: ', result);
      })
      .catch(error => {
        setQuantityLoading(false);
        console.log('Updating product error: ', error);
        alert.show('Invalid quantity specified', {
          timeout: 4000,
          type: 'error'
        });
      })
  };

  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  return(
    <div className="animated fadeIn">
      {loading &&
      <div className="loader-container">
        <CircleLoader
          size={100}
          color={"#20a8d8"}
          loading={loading}
        />
      </div>}

      {!loading &&
      <Row>
        <Col sm="12" md="6">
          <Card>
            <CardHeader>
              <strong>Product Details</strong>
            </CardHeader>
            {product &&
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Name</Label>
                    <Input invalid={!nameValid} type="text" value={name} onChange={(event) => {updateFields("name", event)}} id="cp-name" placeholder="Enter unit name" required />
                    <FormFeedback>Name can not be empty</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="quantity" >Price for single piece (SEK)</Label>
                    <Input invalid={!priceValid} type="number" value={price} onChange={(event) => {updateFields("price", event)}} id="cp-price" placeholder="Enter price for single piece" required />
                    <FormFeedback>Price can not be empty</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>}
            <CardFooter className="d-flex">
              <Button disabled={detailsLoading} type="submit" onClick={updateProduct} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Update</Button>
              <div className="ml-2">
                <CircleLoader
                  size={25}
                  color={"#20a8d8"}
                  loading={detailsLoading}
                />
              </div>
            </CardFooter>
          </Card>
        </Col>

        <Col sm="12" md="6">
          <Card>
            <CardHeader>
              <strong>Product Image</strong>
            </CardHeader>
            <CardBody>
              {!loading &&
              <div>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Input type="file" id="file-input" onChange={(event) => {updateFields("image", event)}} name="file-input" accept="image/png, image/jpeg"/>
                    </FormGroup>
                  </Col>
                </Row>
                {imageUrl &&
                <img src={imageUrl} height="100"/>}
              </div>}
            </CardBody>
            <CardFooter className="d-flex">
              <Button type="submit" disabled={image === null || imageLoading} onClick={updateProductImage} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Update</Button>
                <div className="ml-2">
                  <CircleLoader
                    size={25}
                    color={"#20a8d8"}
                    loading={imageLoading}
                  />
                </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>}

      {!loading &&
      <Row>
        {product &&
        <Col sm="12" md="6">
          <Card>
            <CardHeader>
              <strong>Quantity In All Units</strong>
            </CardHeader>
            <CardBody>
              {product.units.length < 1 &&
              <div className="text-center">
                <ListGroup>
                  <ListGroupItem action color="danger">No unit added yet</ListGroupItem>
                </ListGroup>
              </div>}

              {product.units.length > 0 &&
              <div>
                <Row>
                  {product.units && product.units.map(unit => (
                    <Col md="12" xl="6">
                      <Card>
                        <CardBody>
                          <p className="text-lg-primary m-0">{unit.name}</p>
                          <Badge color='dark'><span>{unit.quantity}</span><small> total items</small></Badge>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <hr />

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="selectSm">Unit</Label>
                      <Input type="select" value={setSelectedUnitQuantity.id} onChange={(event) => {updateFields("selectedUnitQuantity", event)}} name="selectSm" id="cp-unit" bsSize="sm">
                        {
                          product.units && product.units.map(unit => (
                            <option value={unit.id}>{unit.name}</option>
                          ))
                        }
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="selectSm">Action</Label>
                      <Input type="select" value={quantityAction} onChange={(event) => {updateFields("quantityAction", event)}} name="selectSm" id="cp-unit" bsSize="sm">
                        <option value="ADD">ADD</option>
                        <option value="REMOVE">REMOVE</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="quantity" >Quantity</Label>
                      <Input type="number" min="1" max="1000" value={unitQuantity} onChange={(event) => {updateFields("unitQuantity", event)}} id="cp-transfer-quantity" placeholder="Enter quantity to add" required />
                    </FormGroup>
                  </Col>
                </Row>
              </div>}
            </CardBody>
            <CardFooter className="d-flex">
              <Button disabled={quantityLoading} type="submit" onClick={updateQuantity} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>Update</Button>
              <div className="ml-2">
                <CircleLoader
                  size={25}
                  color={"#20a8d8"}
                  loading={quantityLoading}
                />
              </div>
            </CardFooter>
          </Card>
        </Col>}

        <Col sm="12" md="6">
          <Card>
            <CardHeader>
              <strong>Transfer Product</strong>
            </CardHeader>
            <CardBody>
              {product.units.length < 2 &&
              <div className="text-center">
                <ListGroup>
                  <ListGroupItem action color="danger">At least 2 Units must exist for transferring products</ListGroupItem>
                </ListGroup>
              </div>}

              {product.units.length > 1 &&
              <div>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="selectSm">From</Label>
                      <Input type="select" value={selectedFromUnit.id} onChange={(event) => {updateFields("selectedFromUnit", event)}} name="selectSm" id="cp-unit" bsSize="sm">
                        {
                          product.units.map(unit => (
                            <option value={unit.id}>{unit.name}</option>
                          ))
                        }
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="selectSm">To</Label>
                      <Input type="select" value={selectedToUnit.id} onChange={(event) => {updateFields("selectedToUnit", event)}} name="selectSm" id="cp-unit" bsSize="sm">
                        {
                          product.units.map(unit => (
                            <option value={unit.id}>{unit.name}</option>
                          ))
                        }
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="quantity" >Quantity to transfer</Label>
                      <Input type="number" min="1" max="1000" value={transferQuantity} onChange={(event) => {updateFields("transferQuantity", event)}} id="cp-transfer-quantity" placeholder="Enter quantity to transfer" required />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="quantity" >Price for single piece (SEK)</Label>
                      <Input value={product.price} id="cp-transfer-single-price" placeholder="Enter price for single piece" disabled />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="quantity" >Total price (SEK)</Label>
                      <Input value={product.price * transferQuantity} id="cp-transfer-total-price" disabled />
                    </FormGroup>
                  </Col>
                </Row>
              </div>}
            </CardBody>
            <CardFooter className="d-flex">
              <Button disabled={product.units.length < 2 || transferLoading} type="submit" onClick={transferProduct} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Transfer</Button>
              <div className="ml-2">
                <CircleLoader
                  size={25}
                  color={"#20a8d8"}
                  loading={transferLoading}
                />
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>}
    </div>
  )
}

export default UpdateProduct;
