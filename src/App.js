import React from "react";
import Chart from "./components/Chart";
import { Container, Row, Col } from "reactstrap";

const revenue = [
  {
    name: "Tablet",
    value: 120000,
    fill: "#4caf50"
  },
  {
    name: "Smartphone",
    value: 80000,
    fill: "#a5d6a7"
  }
];

const impresions = [
  {
    name: "Tablet",
    value: 20000000,
    fill: "#01579b"
  },
  {
    name: "Smartphone",
    value: 30000000,
    fill: "#039be5"
  }
];

const visits = [
  {
    name: "Tablet",
    value: 480000000,
    fill: "#fdd835"
  },
  {
    name: "Smartphone",
    value: 120000000,
    fill: "#fff59d"
  }
];
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Chart data={revenue} title="Revenue" symbol={"$"} />
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Chart data={impresions} title="Impresions" />
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Chart data={visits} title="Visits" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
