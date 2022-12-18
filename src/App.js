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
      .then((data) => {
        data.map((x) => {
          x.price = Math.round(Math.random() * 2000) / 100;
          x.status = 'default'
        });
        
        this.setState({ exchangeRates: data });
      });
  };

  Timer = () => {
    var compare = this.state.exchangeRates;
    compare.map((x) => {
      var oldPrice = x.price;
      var newPrice = Math.round(Math.random() * 1500) / 100;
      if (newPrice > oldPrice) {
        x.status = "increase";
      } else if(oldPrice > newPrice) {
        x.status = "decrease";
      }
      x.price = newPrice;
    });
    
    this.setState({ exchangeRates: compare });
  };

  componentDidMount() {
    this.getExchangeRates();
    setInterval(() => {
      this.Timer();
    }, 10000);
  }

  render() {
    return (
      <div>
        <div>
          <h4 className="header">Daily Exchange Rate Tracking</h4>
        </div>

        <br />
        <CarouselExhange
          exchangeRates={this.state.exchangeRates}
          Timer={this.Timer}
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
