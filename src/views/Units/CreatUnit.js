import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

function CreateUnit(props) {
  const [regNo, setRegNo] = useState("");
  const [personNo, setPersonNo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [d1, setD1] = useState("Hel trafik");
  const [d2, setD2] = useState("100-500");
  const [d3, setD3] = useState("Helår");
  const [view1, setView1] = useState(true);


  const updateFields = (field, event) => {
    if (field === "regNo") {
      setRegNo(event.target.value);
    } else if(field === "personNo") {
      setPersonNo(event.target.value);
    } else if(field === "email") {
      setEmail(event.target.value);
    } else if(field === "phone") {
      setPhone(event.target.value);
    } else if(field === "d1") {
      setD1(event.target.value);
    } else if(field === "d2") {
      setD2(event.target.value);
    } else if(field === "d3") {
      setD3(event.target.value);
    }
  };

  return (
    <div className="animated fadeIn">
      {view1 &&
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Räkna & Köp Bilförsäkring​</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Registration Number</Label>
                    <Input type="text" value={regNo} onChange={(event) => {updateFields("regNo", event)}} id="cu-name" placeholder="Enter Registration Number" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="ccnumber">Person Number​</Label>
                    <Input type="text" value={personNo} onChange={(event) => {updateFields("personNo", event)}} id="cu-address" placeholder="Enter Person Number" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="select">Välj Försäkringstyp​</Label>
                    <Input type="select" name="select" id="select" value={d1} onChange={(event) => {updateFields("d1", event)}}>
                      <option value="Hel trafik">Hel trafik</option>
                      <option value="Halv  trafik">Halv  trafik</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="select">Välj trolig Körsträcka per år​​</Label>
                    <Input type="select" name="select" id="select" value={d2} onChange={(event) => {updateFields("d2", event)}}>
                      <option value="100-500">100-500</option>
                      <option value="500-1000">500-1000</option>
                      <option value="1000-1500">1000-1500</option>
                      <option value="1500-2000">1500-2000</option>
                      <option value="2000-3000">2000-3000</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="select">Betalningssätt​​​</Label>
                    <Input type="select" name="select" id="select" value={d3} onChange={(event) => {updateFields("d3", event)}}>
                      <option value="Helår">Helår</option>
                      <option value="Halvår">Halvår</option>
                      <option value="Kvartal">Kvartal</option>
                      <option value="Månads">Månads</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Kontakt uppgifter (Frivilligt)​</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Email</Label>
                    <Input type="text" value={email} onChange={(event) => {updateFields("email", event)}} id="cu-name" placeholder="Enter email" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="ccnumber">Telefon Number​</Label>
                    <Input type="text" value={phone} onChange={(event) => {updateFields("phone", event)}} id="cu-address" placeholder="Enter Telephone Number" required />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <div className="bottom-button-container">
          <Button color="primary" className="text-center" onClick={() => setView1(false)}>Nästa</Button>
        </div>
      </Row>}
      {!view1 &&
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Försäkrings information​</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Försäkrings bolag</Label>
                    <Input type="text" disabled value='Sport & Mc försäkring​' required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Försäkringstyp</Label>
                    <Input type="text" disabled value='Helförsäkring' required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Körsträcka</Label>
                    <Input type="text" disabled value='1000-1500mil​' required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Betalningssätt</Label>
                    <Input type="text" disabled value='Månadsvis​' required />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Personuppgifter​</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Namn</Label>
                    <Input type="text" disabled value='Anders Andersson​' required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Person nr</Label>
                    <Input type="text" disabled value='19450404-xxxx​' required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Adress</Label>
                    <Input type="text" disabled value='Fridenborgsgatan 44, 113 44, Stockholm​' required />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>}
      {!view1 &&
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Fordons information​</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Registrerings nr</Label>
                    <Input type="text" disabled value='EER 28E​' required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Fabrikat & Modell</Label>
                    <Input type="text" disabled value='1123' required />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Kontaktuppgifter (Frivilligt)​</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Email</Label>
                    <Input type="text" disabled value='oihag@hotmail.com' required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name" >Telefon nr</Label>
                    <Input type="text" disabled value='070-000 00 05​​' required />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>}

      {!view1 &&
      <div className="bottom-button-container">
        <Button color="danger" className="text-center" onClick={() => props.history.push('/dashboard')}>Bekräfta & Teckna försäkring​</Button>
      </div>}

    </div>
  )
}

export default CreateUnit;
