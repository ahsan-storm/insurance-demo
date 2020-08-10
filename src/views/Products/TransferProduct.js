import React, {useState, useEffect, useRef} from 'react';
import {
  Button,
  Card,
  CardBody, CardFooter,
  CardHeader,
  Col, Form, FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText, Label, ListGroup, ListGroupItem,
  Row
} from "reactstrap";
import {CircleLoader} from "react-spinners";
import ProductCard from "./ProductCard";
import Pagination from "react-js-pagination";
import {debounce} from "lodash";
import {
  PRODUCTS_INVOICES_CREATE_URL,
  PRODUCTS_SEARCH_URL,
  PRODUCTS_TRANSFERS_URL,
  UNITS_URL
} from "../../constants/Api";
import AddedProduct from "./AddedProduct";
import { useAlert } from 'react-alert'

function TransferProduct(props) {
  const alert = useAlert();
  const [products, setProducts] = useState([]);
  const [units, setUnits] = useState([]);
  const [fromUnit, setFromUnit] = useState({});
  const [toUnit, setToUnit] = useState({});
  const [addedProducts, setAddedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unitLoading, setUnitLoading] = useState(true);
  const [requestLoading, setRequestLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [totalElements, setTotalElements] = useState(0);
  const [query, setQuery] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const debouncedFetchProducts = useRef(
    debounce((query, currentPage, controller) => fetchAllProductsByPage(query, currentPage, controller), 500)
  ).current;

  useEffect(() => {
    debouncedFetchProducts(query, currentPage);
  }, [debouncedFetchProducts, currentPage, query]);

  useEffect(() => {
    fetchUnits();
  }, []);

  const fetchUnits = () => {
    fetch(UNITS_URL)
      .then(res => res.json())
      .then((result) => {
        console.log('Units: ', result);
        setUnitLoading(false);
        setUnits(result);
        if (result.length > 1) {
          setFromUnit(result[0]);
          setToUnit(result[1]);
        }
      })
      .catch(error => {
        setUnitLoading(false);
        console.log('Fetch units error: ', error);
      })

  };

  const fetchAllProductsByPage = (query, currentPage, controller) => {
    fetch(PRODUCTS_SEARCH_URL + '?query=' + query + '&size=' + itemsPerPage + '&page=' + (currentPage - 1) + '&sort=name')
      .then(res => res.json())
      .then((result) => {
        if (query === result.query) {
          console.log('Products: ', result.result);
          setLoading(false);
          setProducts(result.result.content);
          setTotalElements(result.result.totalElements);
        }
      })
      .catch(error => {
        setLoading(false);
        console.log('Fetch products error: ', error);
      });

  };

  const productsPageChanged = (number) => {
    if (number !== (currentPage)) {
      console.log('Number: ', number);
      setLoading(true);
      setCurrentPage(number);
    }
  };

  const searchQueryChanged = (event) => {
    setLoading(true);
    setQuery(event.target.value)
  };

  const addProductForTransfer = (id, quantity) => {
    if (quantity !== '') {
      let product = products.find(p => p.id === id);
      console.log(product);
      let existingIndex = addedProducts.findIndex(p => p.id === id);
      // item doesn't exist
      if (existingIndex !== -1) {
        let existingProduct = addedProducts.find(p => p.id === id);
        existingProduct.quantity = existingProduct.quantity + parseInt(quantity);
        addedProducts[existingIndex] = existingProduct;
        setAddedProducts([...addedProducts]);
      } else {
        product.quantity = parseInt(quantity);
        setAddedProducts([...addedProducts, product]);
      }
      console.log('Price: ', totalPrice + (product.price * quantity));
      console.log('Added products: ', addedProducts);
      setTotalPrice(totalPrice + (product.price * quantity));
    }
  };

  const deleteProduct = (id) => {
    let index = addedProducts.findIndex(p => p.id === id);
    let product = addedProducts[index];
    setTotalPrice(totalPrice - (product.price * product.quantity));
    console.log(id, index);
    addedProducts.splice(index, 1);
    console.log('Products: ', addedProducts);
    setAddedProducts([...addedProducts]);
  };

  const updateFields = (field, event) => {
   if (field === "selectedToUnit") {
      console.log('value: ', event.target.value);
      let obj = units.find(obj => obj.id == event.target.value);
      console.log('to unit: ', obj);
      setToUnit(obj);
    } else if (field === "selectedFromUnit") {
      console.log('value: ', event.target.value);
      let obj = units.find(obj => obj.id == event.target.value);
      console.log('from unit: ', obj);
      setFromUnit(obj);
    }
  };

  const requestProductInvoice = () => {
    if (fromUnit === toUnit) {
      alert.show('Can not request from same unit. Please choose different units', {
        timeout: 5000,
        type: 'error'
      });
    } else {
      setRequestLoading(true);
      let products = [];

      addedProducts.forEach(product => {
        const item = {
          "productId": product.id,
          "quantityRequested": product.quantity,
          "quantityReceived": product.quantity,
          "totalPriceRequested": product.quantity * product.price,
          "totalPriceReceived": product.quantity * product.price
        };
        products.push(item);
      });

      const request = {
        fromUnitId: fromUnit.id,
        toUnitId: toUnit.id,
        totalPrice: totalPrice,
        products: products
      };

      console.log('Request: ', request);

      fetch(PRODUCTS_INVOICES_CREATE_URL, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(request)
      })
        .then(response => response.json())
        .then(result => {
          setRequestLoading(false);
          alert.show('Product transferred successfully', {
            timeout: 3000,
            type: 'success'
          });
          console.log('Product transferred successfully: ', result);
          props.history.push('/dashboard');
        })
        .catch(error => {
          setRequestLoading(false);
          console.log('Error while requesting product transfer', error);
          alert.show('Error while requesting product transfer', {
            timeout: 5000,
            type: 'error'
          });
        })
    }
  };

  return(
    <div className="animated fadeIn">
      <Row>
        <Col xl={6}>
            <Card>
              <CardHeader className="align-items-center">
                <i className="fa fa-align-justify"></i>
                <span>Products</span>
              </CardHeader>
              <CardBody>
                {units.length < 2 &&
                <div className="text-center">
                  <ListGroup>
                    <ListGroupItem action color="danger">At least 2 Units must exist for transferring products</ListGroupItem>
                  </ListGroup>
                </div>}

                {units.length > 1 &&
                <div>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectSm">From</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" value={fromUnit.id} onChange={(event) => {updateFields("selectedFromUnit", event)}} name="selectSm" id="SelectLm" bsSize="sm">
                        {
                          units.map((unit, index) => (
                            <option key={index} value={unit.id}>{unit.name}</option>
                          ))
                        }
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectSm">To</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" value={toUnit.id} onChange={(event) => {updateFields("selectedToUnit", event)}} name="selectSm" id="SelectLm" bsSize="sm">
                        {
                          units.map((unit, index) => (
                            <option key={index} value={unit.id}>{unit.name}</option>
                          ))
                        }
                      </Input>
                    </Col>
                  </FormGroup>

                  <InputGroup className="input-prepend">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-search"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input value={query} size="16" type="text" onChange={(event) => searchQueryChanged(event)} placeholder="What are you looking for?" />
                  </InputGroup>

                  <br/>

                  {loading &&
                  <div className="loader-container">
                    <CircleLoader
                      size={100}
                      color={"#20a8d8"}
                      loading={loading}
                    />
                  </div>}

                  {!loading && products.length === 0 &&
                  <div className="text-center">
                    <img src="../../assets/img/not-found.png" height="150"/>
                    <p className="font-weight-bold">Nothing found</p>
                  </div>}

                  {products.length > 0 && !loading &&
                  <Row>
                    {products.map((product, index) =>
                      <ProductCard
                        key={index}
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        quantity={product.quantity}
                        price={product.price}
                        history={props.history}
                        transfer={true}
                        addProduct={addProductForTransfer}
                      />
                    )}
                  </Row>}

                  {!loading && products.length > 0 &&
                  <div className="text-center products-pagination">
                    <Pagination
                      activePage={currentPage}
                      totalItemsCount={totalElements}
                      itemsCountPerPage={itemsPerPage}
                      pageRangeDisplayed={5}
                      onChange={(number) => productsPageChanged(number)}
                      itemClass="page-item"
                      linkClass="page-link"/>
                  </div>}
                </div>}
              </CardBody>
            </Card>
         </Col>

        <Col xl={6}>
          <Card>
            <CardHeader className="align-items-center">
              <i className="fa fa-align-justify"></i>
              <span>Added Products</span>
            </CardHeader>
            <CardBody>
              {addedProducts.length > 0 &&
              <p className="font-2xl">Total: {totalPrice} <small className="text-muted">SEK</small></p>}

              {addedProducts.length === 0 &&
              <div className="text-center">
                <img src="../../assets/img/not-found.png" height="150"/>
                <p className="font-weight-bold">No product added</p>
              </div>}

              {addedProducts.length > 0 &&
              <Row>
                {addedProducts.map((product, index) =>
                  <AddedProduct
                    key={index}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    quantity={product.quantity}
                    price={product.price}
                    history={props.history}
                    deleteProduct={deleteProduct}
                  />
                )}
              </Row>}
            </CardBody>

            {addedProducts.length > 0 &&
            <CardFooter className="d-flex">
              <Button disabled={requestLoading} type="submit" onClick={requestProductInvoice} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>Submit Request</Button>
              <div className="ml-2">
                <CircleLoader
                  size={25}
                  color={"#20a8d8"}
                  loading={requestLoading}
                />
              </div>
            </CardFooter>}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default TransferProduct;
