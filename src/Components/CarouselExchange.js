import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { FaArrowDown, FaArrowUp, FaMinus } from "react-icons/fa";

export default class CarouselExhange extends Component {
  compareValues = (exchangeRate) => {
    return (
      <ul className="exchange-ul-style" key={exchangeRate.id}>
        <li style={{ width: "100px" }}>{exchangeRate.currencyName} / TRY</li>

        <li>
          {exchangeRate.price}
          {exchangeRate.status === "increase" ? (
            <FaArrowUp
              className="arrow-price fade-in fade-out"
              style={{ color: "green" }}
            />
          ) : exchangeRate.status === "decrease" ? (
            <FaArrowDown
              className="arrow-price fade-in fade-out"
              style={{ color: "red" }}
            />
          ) : (
            <FaMinus
              className="arrow-price3"
              style={{ color: "lightgray" }}
            />
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
