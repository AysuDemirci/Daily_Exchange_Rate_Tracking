import React, { Component } from "react";
import Slider from "react-slick";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                <Col>
                  <ul className="exchange-ul-style" key={exchangeRate.id}>
                    <li>{exchangeRate.currencyName}</li>
                    <li>{exchangeRate.price}</li>
                  </ul>
                </Col>
              ))}
              {this.props.exchangeRates.map((exchangeRate) => (
                <Col>
                  <ul className="exchange-ul-style" key={exchangeRate.id}>
                    <li>{exchangeRate.currencyName}</li>
                    <li>{exchangeRate.price}</li>
                  </ul>
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
