import React, { Component, useState } from "react";
import CarouselExhange from "./Components/CarouselExchange";
import CurrencyConverter from "./Components/CurrencyConverter";
import Contents from "./Components/Contents";
import CurrencyTable from "./Components/CurrencyTable";
import Footer from "./Components/Footer";
import "./Style.css";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {
  state = {
    exchangeRates: [],
  };

  getExchangeRates = () => {
    fetch("http://localhost:3000/exchangeRates")
      .then((response) => response.json())
      .then((data) => {
        data.map((x) => {
          x.price = (Math.random() * 10).toFixed(2);
          x.status = "default";
        });

        this.setState({ exchangeRates: data });
      });
  };

  Timer = () => {
    var compare = this.state.exchangeRates;
    compare.map((x) => {
      var incOrDec = Math.random() * (0.1 - -0.1) + -0.1;
      var newPrice = (x.price - incOrDec).toFixed(2);

      newPrice > x.price ? (x.status = "increase") : (x.status = "decrease");
      x.price = newPrice;
    });

    this.setState({ exchangeRates: compare });
  };

  componentDidMount() {
    this.getExchangeRates();
    setInterval(() => {
      this.Timer();
    }, 3000);
  }

  render() {
    return (
      <div>
        <div className="header">
          <h4 style={{ padding: "10px", paddingLeft: "300px" }}>
            Daily Exchange Rate Tracking
          </h4>
        </div>

        <br />
        <CarouselExhange exchangeRates={this.state.exchangeRates} />
        <br />
        <br />
        <br />

        <Container>
          <Row>
            <Col md="3">
              <CurrencyConverter exchangeRates={this.state.exchangeRates} />
            </Col>
            <Col md="6">
              <Contents />
            </Col>
            <Col md="3">
              <CurrencyTable exchangeRates={this.state.exchangeRates} />
            </Col>
          </Row>
        </Container>
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}
