import React, {useState, useEffect} from 'react';
import {
  PRODUCTS_INVOICES_CONFIRM_URL,
  PRODUCTS_INVOICES_URL
} from "../../constants/Api";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap";
import {CircleLoader} from "react-spinners";
import TransferDetailProductCard from "./TransferDetailProductCard";
import { useAlert } from 'react-alert'

function TransferDetail(props) {
  const alert = useAlert();
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPriceReceived, setTotalPriceReceived] = useState(0);

  useEffect(() => {
    fetchTransferDetail();
  }, []);

  const fetchTransferDetail = () => {
    fetch(PRODUCTS_INVOICES_URL + "/" + props.match.params.id)
      .then(res => res.json())
      .then((transferDetails) => {
        console.log('Transfer Details: ', transferDetails);
        setLoading(false);
        setDetails(transferDetails);
        setProducts(transferDetails.products);
        setTotalPriceReceived(transferDetails.totalPrice);
      })
      .catch(error => {
        setLoading(false);
        console.log('Fetch products error: ', error);
      })
  };

  const confirmProductTransfer = () => {
    setSubmitLoading(true);
    console.log('Request products: ', products);

    let requestProducts = [];
    products.forEach(product => {
      const item = {
        "productInvoiceItemId" : product.id,
        "quantityReceived": product.quantityReceived,
        "quantityRequested": product.quantityRequested,
        "totalPriceReceived": product.totalPriceReceived,
        "totalPriceRequested": product.totalPriceRequested
      };
      requestProducts.push(item);
    });

    const request = {
      "productInvoiceId": props.match.params.id,
      "totalPriceReceived": totalPriceReceived,
      "products": requestProducts
    };

    fetch(PRODUCTS_INVOICES_CONFIRM_URL, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(request)
    })
      .then(response => response.json())
      .then(result => {
        setSubmitLoading(false);
        alert.show('Products sent successfully', {
          timeout: 3000,
          type: 'success'
        });
        console.log('Product sent successfully: ', result);
        props.history.push('/dashboard');
      })
      .catch(error => {
        setSubmitLoading(false);
        console.log('Error while sending products', error);
        alert.show('Error while sending products', {
          timeout: 5000,
          type: 'error'
        });
      })
  };

  const productQuantityChanged = (product) => {
    console.log('PQC: ', product);
    let existingIndex = products.findIndex(p => p.id === product.id);
    products[existingIndex] = product;
    console.log('Updated products: ', products);
    setProducts([...products]);
    let totalPrice = 0;
    products.forEach(product => {
      console.log(product.totalPriceReceived);
      totalPrice = totalPrice + product.totalPriceReceived;
      console.log('TP: ', totalPrice);
    });
    setTotalPriceReceived(totalPrice);
  };

  return (
    <div className="animated fadeIn">
      <Col xl={12}>
        <Card>
          <CardHeader className="align-items-center">
            <i className="fa fa-align-justify"></i>
            <span>Added Products</span>
          </CardHeader>
          <CardBody>
            {loading &&
            <div className="loader-container">
              <CircleLoader
                size={100}
                color={"#20a8d8"}
                loading={loading}
              />
            </div>}

            {!loading &&
            <div>
              {products.length > 0 &&
              <div className="d-flex justify-content-between">
                <p className="font-2xl">Total Requested: {details.totalPrice} <small className="text-muted">SEK</small></p>
              </div>}

              {products.length === 0 &&
              <div className="text-center">
                <img src="../../assets/img/not-found.png" height="150"/>
                <p className="font-weight-bold">No product added</p>
              </div>}

              {products.length > 0 &&
              <Row>
                {products.map((product, index) =>
                  <TransferDetailProductCard
                    key={index}
                    product={product}
                    productQuantityChanged={productQuantityChanged}
                    status={details.status}
                    history={props.history}
                  />
                )}
              </Row>}

              {products.length > 0 &&
              <div className="d-flex justify-content-between">
                <p className="font-2xl">Total Received: {totalPriceReceived} <small className="text-muted">SEK</small></p>
              </div>}
            </div>}
          </CardBody>
          
          {details.status === 'REQUESTED' &&
          <CardFooter className="d-flex">
            <Button disabled={submitLoading} type="submit" onClick={confirmProductTransfer} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>Send Items</Button>
            <div className="ml-2">
              <CircleLoader
                size={25}
                color={"#20a8d8"}
                loading={submitLoading}
              />
            </div>
          </CardFooter>}
        </Card>
      </Col>
    </div>
  )
}

export default TransferDetail;
