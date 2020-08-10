import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';

const companies = ['Sport & MC​', 'Personbilar (upp till 250k)', 'Personbilar (från 250k och uppåt)'];

function Dashboard(props) {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              Välj försäkrings bolag​
            </CardHeader>
            <CardBody>
                <div>
                  <br />
                  <Table hover responsive className="table-outline">
                    <thead className="thead-light">
                    <tr>
                      <th>Försäkringsbolag #</th>
                      <th>Namn</th>
                    </tr>
                    </thead>
                    <tbody>
                    {companies.map((company, index) => (
                      <tr key={index} onClick={() => props.history.push('/buy')}>
                        <td>
                          <p className="font-sm font-weight-bold">{index + 1}</p>
                        </td>
                        <td>
                          <p className="font-sm ">{company}</p>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
