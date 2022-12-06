import React, { Component, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowUp } from "react-icons/fa";

export default class CarouselExhange extends Component {
  componentDidMount() {
    this.props.getExchangeRates();
  }

  render() {
    return (
      <div>
        <Container className="exchange-slideshow">
          <Row className="exchange-card-styles">
            <div style={{ display: "flex" }}>
              {this.props.exchangeRates.map((exchangeRate) => (
                <ul className="exchange-ul-style" key={exchangeRate.id}>
                  <li style={{ width: "100px" }}>
                    {exchangeRate.currencyName}
                  </li>
                  <li>
                    {exchangeRate.price}
                    <FaArrowUp
                      style={{
                        width: "13px",
                        color: "green",
                        marginLeft: "10px",
                        marginTop: "-5px",
                      }}
                    />
                  </li>
                </ul>
              ))}
              {this.props.exchangeRates.map((exchangeRate) => (
                <ul className="exchange-ul-style" key={exchangeRate.id}>
                  <li style={{ width: "100px" }}>
                    {exchangeRate.currencyName}
                  </li>
                  <li>
                    {exchangeRate.price}
                    <FaArrowUp
                      style={{
                        width: "13px",
                        color: "green",
                        marginLeft: "10px",
                        marginTop: "-5px",
                      }}
                    />
                  </li>
                </ul>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
