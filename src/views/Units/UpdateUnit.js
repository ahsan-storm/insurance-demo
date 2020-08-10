import React, { useState, useEffect } from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, Label, Progress, Row} from "reactstrap";
import { useAlert } from 'react-alert'
import {UNITS_URL} from "../../constants/Api";
import {CircleLoader} from "react-spinners";

function UpdateUnit(props) {
  const alert = useAlert();
  const [unit, setUnit] = useState({});
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(UNITS_URL + '/' + props.match.params.id)
      .then(res => res.json())
      .then((result) => {
        console.log('Units: ', result);
        setLoading(false);
        setUnit(result);
        setName(result.name);
        setAddress(result.address);
        setPhone(result.phone);
        setStatus(result.status);
      })
      .catch(error => {
        setLoading(false);
        console.log('Error: ', error);
      })
  }, []);

  const updateFields = (field, event) => {
    if (field === "name") {
      setName(event.target.value);
    } else if(field === "address") {
      setAddress(event.target.value);
    } else if(field === "phone") {
      setPhone(event.target.value);
    } else if(field === "status") {
      setStatus(event.target.value);
    }
  };

  const updateUnit = () => {
    let request = {
      id: unit.id,
      name: name,
      address: address,
      phone: phone,
      status: status.toUpperCase()
    };
    console.log('Request obj: ', request);
    setUpdateLoading(true);
    fetch(UNITS_URL, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(request)
    })
      .then(response => response.json())
      .then(result => {
        setUpdateLoading(false);
        alert.show('Update successful', {
          timeout: 3000,
          type: 'success'
        });
        console.log('Updated unit result: ', result);
      })
      .catch(error => {
        setUpdateLoading(false);
        console.log('Updating units error: ', error)
      })
  };

  return (
    <div className="animated fadeIn">

      {loading &&
      <div className="loader-container">
        <CircleLoader
          size={100}
          color={"#20a8d8"}
          loading={loading}
        />
      </div>}

      {!loading && unit &&
      <Row>
        <Col xs="12" sm="6" md="8">
          <Card>
            <CardHeader>
              <strong>Update Unit</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Name</Label>
                    <Input type="text" value={name} onChange={(event) => {updateFields("name", event)}} id="cu-name" placeholder="Enter unit name" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="ccnumber">Address</Label>
                    <Input type="text" value={address} onChange={(event) => {updateFields("address", event)}} id="cu-address" placeholder="Enter unit address" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="ccnumber">Phone Number</Label>
                    <Input type="text" value={phone} onChange={(event) => {updateFields("phone", event)}} id="cu-phone" placeholder="Enter unit phone number" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label htmlFor="selectSm">Status</Label>
                    <Input type="select" value={status} onChange={(event) => {updateFields("status", event)}} name="selectSm" id="cu-status" bsSize="sm">
                      <option value="ACTIVE">Active</option>
                      <option value="INACTIVE">Inactive</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="d-flex">
              <Button type="submit" disabled={updateLoading} onClick={updateUnit} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>Update</Button>
              <div className="ml-2">
                <CircleLoader
                  size={25}
                  color={"#20a8d8"}
                  loading={updateLoading}
                />
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>}
    </div>
  )
}

export default UpdateUnit;
