import React from "react";
import { Container } from "reactstrap";


export default function Navbar() {
  return (
    <div className="header">
      <Container>
        <h2 style={{ paddingTop: "15px", fontSize: "40px" }}>
          Daily Exchange Rate Tracking
        </h2>
      </Container>
    </div>
  );
}
