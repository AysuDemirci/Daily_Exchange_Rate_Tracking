import React, { Component } from "react";
import CarouselExhange from "./Components/CarouselExchange";
import SideNavbar from "./Components/SideNavbar";
import Contents from "./Components/Contents";
import "./Style.css";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {
  state = {
    exchangeRates: [],
  };

  getExchangeRates = () => {
    fetch("http://localhost:3000/exchangeRates")
      .then((response) => response.json())
      .then((data) => this.setState({ exchangeRates: data }));
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>
          <h4 className="header">Daily Exchange Rate Tracking</h4>
        </div>

        <br />
        <CarouselExhange
          getExchangeRates={this.getExchangeRates}
          exchangeRates={this.state.exchangeRates}
        />
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
}
