import React, { useState, useEffect } from 'react';

import {Button, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Progress, Row, Table} from "reactstrap";
import UnitRow from "./UnitRow";
import {UNITS_URL} from "../../constants/Api";
import {CircleLoader} from "react-spinners";

function Units(props) {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(UNITS_URL)
      .then(res => res.json())
      .then((result) => {
          console.log('Units: ', result);
          setLoading(false);
          setUnits(result);
      })
      .catch(error => {
        setLoading(false);
        console.log('Fetch units error: ', error);
      })
  }, []);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={6}>
          <Card>
            <CardHeader className="align-items-center">
              <i className="fa fa-align-justify"></i>
              <span>Räkna & Köp Bilförsäkring​</span>
              <span className="float-right mb-0">
                  <Button active block color="primary" onClick={() => props.history.push('/units/create')} aria-pressed="true">Create</Button>
              </span>
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

              {!loading && units.length === 0 &&
              <div className="text-center">
                <ListGroup>
                  <ListGroupItem action color="danger">Nothing to show here</ListGroupItem>
                </ListGroup>
              </div>}
              {units.length > 0 &&
              <Table responsive hover>
                <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {units.map((unit, index) =>
                  <UnitRow key={index} unit={unit} history={props.history}/>
                )}
                </tbody>
              </Table>}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Units;
