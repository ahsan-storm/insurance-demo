import React, {useState} from 'react';
import {Badge, Button, Card, CardBody, Col, Input} from "reactstrap";

function AddedProduct(props) {

  const imageSrc = props.image ? "data:image/jpeg;base64, " + props.image : "../../assets/img/no-image.png";

  return (
    <Col xs="12" sm="6" md="4" lg="4" xl="3">
      <Card> {/*onClick={() => props.history.push(productLink)}*/}
        <CardBody>
          <div className="text-center">
            <img src={imageSrc} height="100" />
          </div>
          <br/>
          <p className="text-lg-primary m-0">{props.name}</p>
          <p className="m-0">{props.quantity} <small className="text-muted">items</small></p>
          <p className="m-0">{props.price * props.quantity} <small className="text-muted">SEK</small></p>
        </CardBody>
        <Button onClick={() => props.deleteProduct(props.id)} color="danger" block>Remove</Button>
      </Card>
    </Col>
  )
}

export default AddedProduct;
