import React, { useState, useEffect, useRef } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input, InputGroup, InputGroupAddon, InputGroupText, Row
} from "reactstrap";
import {PRODUCTS_SEARCH_URL} from "../../constants/Api";
import ProductCard from "./ProductCard";
import Pagination from "react-js-pagination";
import { debounce } from "lodash";
import {CircleLoader} from "react-spinners";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [totalElements, setTotalElements] = useState(0);
  const [query, setQuery] = useState('');

  const debouncedFetchProducts = useRef(
    debounce((query, currentPage, controller) => fetchAllProductsByPage(query, currentPage, controller), 500)
  ).current;

  useEffect(() => {
    debouncedFetchProducts(query, currentPage);
  }, [debouncedFetchProducts, currentPage, query]);

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

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader className="align-items-center">
              <i className="fa fa-align-justify"></i>
              <span>Products</span>
              <span className="float-right mb-0">
                  <Button block color="primary" onClick={() => props.history.push('/products/create')} aria-pressed="true">Create</Button>
              </span>
            </CardHeader>
            <CardBody>
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Products;
