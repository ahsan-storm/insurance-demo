import React, {useState} from 'react';
import {Badge, Button, Card, CardBody, CardHeader, Col, Input} from "reactstrap";

function TransferDetailProductCard(props) {
  console.log('Props: ', props);
  const imageSrc = props.product.productImage ? "data:image/jpeg;base64, " + props.product.productImage : "../../assets/img/no-image.png";
  const [quantitySending, setQuantitySending] = useState(props.product.quantityRequested);
  const [updatingQuantity, setUpdatingQuantity] = useState(false);
  const [updatedQuantity, setUpdatedQuantity] = useState(props.product.quantityReceived);

  const quantityChanged = (quantity) => {
    console.log(quantity);
    if (isNumber(quantity) || quantity === '') {
      setQuantitySending(quantity);
    }
  };

  const isNumber = (value) => {
    if (/^\d+$/.test(value)) {
      return true;
    }
    return false;
  };

  const updateQuantitySending =() => {
    console.log('hello');
    if (updatingQuantity) {
      let product = props.product;
      product.quantityReceived = parseInt(quantitySending);
      product.totalPriceReceived = props.product.productPrice * quantitySending;
      props.productQuantityChanged(product);
    }
    setUpdatedQuantity(quantitySending);
    setUpdatingQuantity(!updatingQuantity);
  };

  return (
    <Col xs="12" sm="6" md="4" lg="4" xl="2">
      <Card>
        <CardHeader>
          <div className="text-center">
            <img src={imageSrc} height="100" />
          </div>
        </CardHeader>
        <CardBody className="m-0">
          <p className="text-lg-primary m-0 font-weight-bold">{props.product.productName}</p>
          <p className="m-0">Request - <span className="text-muted">{props.product.quantityRequested} items</span></p>
          <p className="m-0">Request Price - <span className="text-muted">{props.product.totalPriceRequested} <small className="text-muted">SEK</small></span></p>
          <p className="m-0">{props.status === 'SENT' ? 'Sent' : 'Sending'} - <span className="text-muted">{updatedQuantity} items</span></p>
          <p className="m-0">Final Price - <span className="text-muted">{props.product.productPrice * updatedQuantity} <small className="text-muted">SEK</small></span></p>
        </CardBody>

        {props.status !== 'SENT' &&
        <div className={updatingQuantity ? "d-flex justify-content-between bg-primary m-0" : "d-flex justify-content-between bg-danger m-0"}>
          <Input onChange={(event) => quantityChanged(event.target.value)} disabled={!updatingQuantity} value={quantitySending} className="w-50 rounded-0 text-center" size="16" />
          <span onClick={updateQuantitySending} className="w-50 text-center align-self-center pointer">{updatingQuantity ? 'Update' : 'Change'}</span>
        </div>}
      </Card>
    </Col>
  )
}

export default TransferDetailProductCard;
