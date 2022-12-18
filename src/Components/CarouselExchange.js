import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import {
  FaArrowDown,
  FaArrowsAltH,
  FaArrowUp,
} from "react-icons/fa";

export default class CarouselExhange extends Component {
  compareValues = (exchangeRate) => {
    return (
      <ul className="exchange-ul-style" key={exchangeRate.id}>
        <li style={{ width: "100px" }}>{exchangeRate.currencyName}</li>
        <li>
          {exchangeRate.price}
          {exchangeRate.status === "increase" ? (
            <FaArrowUp className="arrow-price" style={{ color: "green" }} />
          ) : exchangeRate.status === "decrease" ? (
            <FaArrowDown className="arrow-price" style={{ color: "red" }} />
          ) : (
            <FaArrowsAltH className="arrow-price" style={{ color: "grey" }} />
          )}
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        <Container className="exchange-slideshow">
          <Row className="exchange-card-styles">
            <div style={{ display: "flex" }}>
              {this.props.exchangeRates.map((x) => {
                return this.compareValues(x);
              })}
              {this.props.exchangeRates.map((x) => {
                return this.compareValues(x);
              })}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
