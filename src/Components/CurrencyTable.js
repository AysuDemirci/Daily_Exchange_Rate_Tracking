import React, { Component } from "react";
import { FaArrowDown, FaArrowUp, FaMinus } from "react-icons/fa";

export default class CurrencyTable extends Component {
  render() {
    return (
      <div>
        <table
          style={{
            border: "1px solid #ffaa5b",
            width: "350px",
            height: "470px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  fontSize: "15px",
                  color: "orangered",
                  height: "40px",
                }}
              >
                Currency Unit / TRY
              </th>
              <th style={{ fontSize: "15px", color: "orangered" }}>
                Currency Rate
              </th>
              <th style={{ color: "white" }}>.......</th>
            </tr>
          </thead>

          <tbody>
            {this.props.exchangeRates.map((exchangeRate) => (
              <tr style={{ border: "1px solid #ffaa5b" }} key={exchangeRate.id}>
                <td>{exchangeRate.currencyName}</td>
                <td>{exchangeRate.price}</td>
                <td>
                  {exchangeRate.status === "increase" ? (
                    <FaArrowUp
                      className="arrow-price1 fade-in fade-out"
                      style={{ color: "green" }}
                    />
                  ) : exchangeRate.status === "decrease" ? (
                    <FaArrowDown
                      className="arrow-price1 fade-in fade-out"
                      style={{ color: "red" }}
                    />
                  ) : (
                    <FaMinus
                      className="arrow-price4"
                      style={{ color: "transparent" }}
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
