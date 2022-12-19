import React, { Component } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";

export default class CurrencyConverter extends Component {
  render() {
    return (
      <div>
        <Container>
          <Col
            style={{
              border: "1.5px solid #ffaa5b",
              height: "270px",
              borderRadius: "7px",
              width: "320px",
              marginLeft: "-30px",
              boxShadow:" 0 10px 20px -10px rgba(0,0,0,0.2)"
            }}
          >
            <h5
              style={{
                marginLeft: "75px",
                marginTop: "15px",
                color: "orangered",
              }}
            >
              Currency Converter
            </h5>
            <br />
            <Row>
              <select
                style={{
                  width: "80px",
                  height: "40px",
                  marginLeft: "50px",
                  borderColor: "lightgray",
                  borderRadius: "5px",
                }}
              >
                {this.props.exchangeRates.map((exchangeRate) => (
                  <option key={exchangeRate.id}>
                    {exchangeRate.currencyName}
                  </option>
                ))}
              </select>
              <Input style={{ width: "155px", marginLeft: "10px" }} />
            </Row>

            <br />
            <Row>
              <select
                style={{
                  width: "80px",
                  height: "40px",
                  marginLeft: "50px",
                  borderColor: "lightgray",
                  borderRadius: "5px",
                }}
              >
                {this.props.exchangeRates.map((exchangeRate) => (
                  <option key={exchangeRate.id}>
                    {exchangeRate.currencyName}
                  </option>
                ))}
              </select>
              <Input style={{ width: "155px", marginLeft: "10px" }} />
            </Row>
            <br />
            <Button
              style={{
                width: "245px",
                marginLeft: "40px",
                backgroundColor: "orangered",
                borderColor: "orangered",
                height: "40px",
              }}
            >
              Convert
            </Button>
          </Col>
          <br />
          <br />
          <Col>
            <h5 style={{color:"orangered"}}>User Comments</h5>
            <div
              style={{
                overflow:"auto",
                border: "1px solid #ffaa5b",
                height: "400px",
                marginLeft: "-30px",
                borderRadius:"7px",
                boxShadow:" 0 10px 20px -10px rgba(0,0,0,0.2)"
              }}
            >
              <br/>
              <span style={{fontWeight:"bold",marginLeft:"50px"}}>John Lethans</span>
              <p style={{marginLeft:"50px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <br/>
              <span style={{fontWeight:"bold",marginLeft:"50px"}}>Amanda Klasome</span>
              <p style={{marginLeft:"50px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <br/>
              <span style={{fontWeight:"bold",marginLeft:"50px"}}>Jeremy Coxy</span>
              <p style={{marginLeft:"50px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <br/>
              <span style={{fontWeight:"bold",marginLeft:"50px"}}>Roxenne Blutter</span>
              <p style={{marginLeft:"50px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </Col>
        </Container>
      </div>
    );
  }
}
