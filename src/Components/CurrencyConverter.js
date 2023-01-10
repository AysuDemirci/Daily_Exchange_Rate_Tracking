import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { FaExchangeAlt } from "react-icons/fa";

export default function CurrencyConverter(props) {
  const { exchangeRates } = props;

  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  //burada değerleri çek
  useEffect(() => {
    var list = [];
    exchangeRates.map((exchangeRate) => {
      var name = exchangeRate.currencyName;
      var price = exchangeRate.price;
      list.push({ name, price });
    });
    setInfo(list);
    setOptions(info);
    convert();
  }, [exchangeRates]);

  function findElement(listOfObject, currencyName) {
    var rateObject = listOfObject.find(function (element) {
      return element.name == currencyName;
    });
    if (rateObject !== undefined) {
      return rateObject.price;
    }
  }

  function convert() {
    var findTo = findElement(info, to);
    var findFrom = findElement(info, from);

    if (findTo !== undefined && findFrom !== undefined) {
      setOutput((input * findFrom) / findTo);
    }
  }

  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div>
      <Container>
        <Col className="converter-style">
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
          <Input
            placeholder="Enter the amount"
            onChange={(e) => setInput(e.target.value)}
            type="number"
            style={{ width: "165px", marginLeft: "80px", marginBottom: "25px" }}
          />
          <Row>
            <select
              options={options}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              value={from}
              style={{
                width: "80px",
                height: "40px",
                marginLeft: "35px",
                borderColor: "lightgray",
                borderRadius: "5px",
              }}
            >
              {exchangeRates.map((exchangeRate) => (
                <option key={exchangeRate.id}>
                  {exchangeRate.currencyName}
                </option>
              ))}
            </select>
            <Button
              onClick={() => {
                flip();
              }}
              style={{
                width: "40px",
                marginLeft: "35px",
                backgroundColor: "orange",
                borderColor: "orange",
              }}
            >
              <FaExchangeAlt />
            </Button>
            <select
              options={options}
              onChange={(e) => {
                setTo(e.target.value);
              }}
              value={to}
              style={{
                width: "80px",
                height: "40px",
                marginLeft: "35px",
                borderColor: "lightgray",
                borderRadius: "5px",
              }}
            >
              {exchangeRates.map((exchangeRate) => (
                <option key={exchangeRate.id}>
                  {exchangeRate.currencyName}
                </option>
              ))}
            </select>
            <Button
              style={{
                marginTop: "20px",
                marginLeft: "35px",
                width: "272px",
                backgroundColor: "orange",
                borderColor: "orange",
                fontSize: "16px",
                fontWeight: "600",
              }}
              onClick={() => {
                convert();
              }}
            >
              Convert
            </Button>
            <br />
          </Row>

          <h6 style={{ marginLeft: "25px", marginTop: "15px" }}> Amount:</h6>
          <p style={{ marginLeft: "25px" }}>{output.toFixed(2) + " " + to}</p>
        </Col>
        
        <br />
        <br />
      </Container>
    </div>
  );
}
