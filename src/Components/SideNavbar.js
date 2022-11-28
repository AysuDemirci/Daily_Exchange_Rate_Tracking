import React from "react";
import { Col, Container } from "reactstrap";

export default function SideNavbar() {
  return (
    <div>
      <Container>
        <Col>
          <ul className="navbar-style">
            <li className="sidenavbar-item">Option 1 </li>
            <li className="sidenavbar-item">Option 2 </li>
            <li className="sidenavbar-item">Option 3 </li>
            <li className="sidenavbar-item">Option 4 </li>
            <li className="sidenavbar-item">Option 5 </li>
          
          </ul>
        </Col>
      </Container>
    </div>
  );
}
