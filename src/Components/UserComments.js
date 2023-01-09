import React, { Component } from "react";
import { Col } from "reactstrap";

export default class UserComments extends Component {
  render() {
    return (
      <Col style={{marginTop:"-200px"}}>
        <h5 style={{ color: "orangered" }}>User Comments</h5>
        <div
          style={{
            overflow: "auto",
            border: "1px solid #ffaa5b",
            height: "400px",
            marginLeft: "-30px",
            borderRadius: "7px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <br />
          <span style={{ fontWeight: "bold", marginLeft: "50px" }}>
            John Lethans
          </span>
          <p style={{ marginLeft: "50px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <br />
          <span style={{ fontWeight: "bold", marginLeft: "50px" }}>
            Amanda Klasome
          </span>
          <p style={{ marginLeft: "50px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <br />
          <span style={{ fontWeight: "bold", marginLeft: "50px" }}>
            Jeremy Coxy
          </span>
          <p style={{ marginLeft: "50px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <br />
          <span style={{ fontWeight: "bold", marginLeft: "50px" }}>
            Roxenne Blutter
          </span>
          <p style={{ marginLeft: "50px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
        <br/>
      </Col>
    );
  }
}
