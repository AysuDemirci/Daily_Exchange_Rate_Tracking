import React, { Component } from "react";
import { Col } from "reactstrap";

export default class UserComments extends Component {
  state = {
    users: [],
  };

  getUsers = () => {
    fetch("https://daily-exchange-rate-tracking-default-rtdb.firebaseio.com/users.json  ")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <Col style={{ marginTop: "-350px" }}>
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
          {this.state.users.map((user) => (
            <ul key={user.id} style={{ listStyle: "none" }}>
              <li
                style={{
                  fontWeight: "bold",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {user.userName}
              </li>
              <p style={{ marginLeft: "10px", marginTop: "10px" }}>
                {user.comment}
              </p>
            </ul>
          ))}
        </div>
        <br />
      </Col>
    );
  }
}
