import React, { Component } from "react";
import { FaArrowDown, FaArrowsAltH, FaArrowUp } from "react-icons/fa";

export default class CurrencyTable extends Component {
  render() {
    return (
      <div>
        <table
          style={{
            border: "1px solid #ffaa5b",
            width: "320px",
            height: "470px",
            boxShadow: " 0 10px 20px -10px rgba(0,0,0,0.2)",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  fontSize: "15px",
                  color: "orangered",
                  height: "40px",
                  padding: "10px",
                }}
              >
                Currency Unit
              </th>
              <th style={{ fontSize: "15px", color: "orangered" }}>
                Currency Rate
              </th>
            </tr>
          </thead>

          <tbody>
            {this.props.exchangeRates.map((exchangeRate) => (
              <tr style={{ border: "1px solid #ffaa5b" }} key={exchangeRate.id}>
                <td style={{ paddingLeft: "40px" }}>
                  {exchangeRate.currencyName}
                </td>
                <td>{exchangeRate.price}</td>
                <td>
                  {exchangeRate.status === "increase" ? (
                    <FaArrowUp
                      className="arrow-price1"
                      style={{ color: "green" }}
                    />
                  ) : exchangeRate.status === "decrease" ? (
                    <FaArrowDown
                      className="arrow-price1"
                      style={{ color: "red" }}
                    />
                  ) : (
                    <FaArrowsAltH
                      className="arrow-price1"
                      style={{ color: "grey" }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
