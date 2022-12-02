import React from "react";
import CarouselExhange from "./Components/CarouselExchange";
import SideNavbar from "./Components/SideNavbar";
import Contents from "./Components/Contents";
import "./Style.css";
import { Col, Container, Row } from "reactstrap";

function App() {
  return (
    <div>
      <div>
        <h4 className="header">Daily Exchange Rate Tracking</h4>
      </div>

      <br />
      <CarouselExhange />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col md="3">
            <SideNavbar />
          </Col>
          <Col md="9">
            <Contents />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
