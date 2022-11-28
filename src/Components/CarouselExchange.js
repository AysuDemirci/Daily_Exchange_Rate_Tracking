import React from "react";
import { Container, Row } from "reactstrap";

function CarouselExhange() {
  return (
    <div>
      <Container>
        <h4 style={{marginLeft:"38%"}}>Daily Exchange Rate Tracking</h4>
        <br/>
        <br/>
        <Row>
          <ul className="exchange-style">
            <li className="exchange-list">İtem 1</li>
            <li className="exchange-list">İtem 2</li>
            <li className="exchange-list">İtem 3</li>
            <li className="exchange-list">İtem 4</li>
            <li className="exchange-list">İtem 5</li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default CarouselExhange;
