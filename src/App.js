import React, { Component } from "react";
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

  AssignedValue = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  Timer = () => {
    var compare = this.state.exchangeRates;

    var idList = [];

    var value = this.AssignedValue(1, 5);
   

    for (let i = 0; i < value; i++) {
      const random = Math.floor(Math.random() * compare.length);
      idList.push(random);
    }

    compare.map((x) => {
      const items = x.id;
      var found = idList.find(function (element) {
        return element == items;
      });
      if (found) {
        var incOrDec = Math.random() * (0.1 - -0.1) + -0.1;
        var newPrice = (x.price - incOrDec).toFixed(2);

        newPrice > x.price ? (x.status = "increase") : (x.status = "decrease");
        x.price = newPrice;
      } else {
        x.status = "default";
      }
    });

    this.setState({ exchangeRates: compare });
  };

  componentDidMount() {
    this.getExchangeRates();

    const timeRandom = () => {
      var rand = this.AssignedValue(1, 5);
      setTimeout(timeRandom, rand * 1000);
      this.Timer();
    };
    timeRandom();
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
