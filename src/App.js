import React, { Component} from "react";
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
          x.price = Math.floor(Math.random() * 50);
        });
        this.setState({ exchangeRates: data });
      });
  };

  componentDidMount() {
    const timer = setTimeout(() => {
      this.getExchangeRates();
    }, 60000 * 2);

    return () => clearTimeout(timer);
  }

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
