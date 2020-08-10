import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Progress,
  Row
} from "reactstrap";
import { useAlert } from 'react-alert';
import {CREATE_PRODUCTS_URL, UNITS_URL} from "../../constants/Api";
import {CircleLoader} from "react-spinners";

function CreateProduct(props) {
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [price, setPrice] = useState("");
  const [priceValid, setPriceValid] = useState(true);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const createProduct = () => {

    if (checkValidity()) {
      const request = {
        name: name,
        price: price
      };

      let formData = new FormData();
      formData.append("image", image);
      formData.append("request", new Blob([JSON.stringify(request)], {
        type: "application/json"
      }));

      console.log('Create product: ', formData);
      setLoading(true);

      fetch(CREATE_PRODUCTS_URL, {
        method: "POST",
        body: formData
      })
        .then(handleErrors)
        .then(response => response.json())
        .then(result => {
          setLoading(false);
          alert.show('Created product successfully', {
            timeout: 3000,
            type: 'success'
          });
          console.log('Updated product result: ', result);
          props.history.goBack();
        })
        .catch(error => {
          setLoading(false);
          console.log('Creating product error: ', error);
          alert.show('Product with this name already exist for this unit', {
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

  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  const updateFields = (field, event) => {
    if (field === "name") {
      setName(event.target.value);
    } else if (field === "price") {
      setPrice(event.target.value);
    } else if (field === "image") {
      if (event.target.files && event.target.files.length > 0) {
        setImage(event.target.files[0]);
        setImageUrl(URL.createObjectURL(event.target.files[0]));
      } else {
        setImageUrl(null);
      }
    }
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Create Product</strong>
            </CardHeader>
            <CardBody>
              <div>
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

                <Row>
                  <Col md="12">
                  <FormGroup>
                    <Label htmlFor="file-input">Image</Label>
                    <Input type="file" id="file-input" onChange={(event) => {updateFields("image", event)}} name="file-input" accept="image/png, image/jpeg"/>
                  </FormGroup>
                  </Col>
                </Row>

                {image &&
                <img src={imageUrl} height="100"/>}
              </div>
            </CardBody>
            <CardFooter className="d-flex">
              <Button type="submit" disabled={loading} onClick={createProduct} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>
              <div className="ml-2">
                <CircleLoader
                  size={25}
                  color={"#20a8d8"}
                  loading={loading}
                />
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CreateProduct;
