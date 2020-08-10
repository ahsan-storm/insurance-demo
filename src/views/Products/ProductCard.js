import React, {useState} from 'react';
import {Badge, Card, CardBody, Col, Input, InputGroup} from "reactstrap";
import CardHeader from "reactstrap/es/CardHeader";

function ProductCard(props) {
  console.log(props);
  const [quantity, setQuantity] = useState('1');

  const imageSrc = props.image ? "data:image/jpeg;base64, " + props.image : "../../assets/img/no-image.png";
  const productLink = `/products/${props.id}`;

  const quantityChanged = (quantity) => {
    console.log(quantity);
    if (isNumber(quantity) || quantity === '') {
      setQuantity(quantity);
    }
  };

  const isNumber = (value) => {
    if (/^\d+$/.test(value)) {
      return true;
    }
    return false;
  };

  const cardClicked = () => {
    if (!props.transfer) {
      props.history.push(productLink);
    }
  };

  return (
    <Col xs="12" sm="6" md="4" lg="4" xl="4">
      <Card onClick={cardClicked}>
        <CardHeader>
          <div className="text-center">
            <img src={imageSrc} height="100" />
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-lg-primary m-0">{props.name}</p>
          {!props.transfer &&
          <p className="m-0">{props.quantity} <small className="text-muted">total items</small></p>}
          <p className="m-0">{props.price} <small className="text-muted">SEK / pc</small></p>
        </CardBody>
        {props.transfer &&
        <div className="d-flex justify-content-between bg-primary">
          <Input onChange={(event) => quantityChanged(event.target.value)} value={quantity} className="w-50 rounded-0 text-center" size="16" />
          <span onClick={() => props.addProduct(props.id, quantity)} className="w-50 text-center align-self-center pointer">ADD</span>
        </div>}
      </Card>
    </Col>
  )
}

export default ProductCard;
