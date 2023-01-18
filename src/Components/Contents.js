import React, { Component } from "react";

export default class Contents extends Component {
  state = {
    contents: [],
  };
  getContents = () => {
    fetch("https://daily-exchange-rate-tracking-default-rtdb.firebaseio.com/contents.json")
      .then((response) => response.json())
      .then((data) => this.setState({ contents: data }));
  };
  componentDidMount() {
    this.getContents();
  }

  render() {
    return (
      <div>
        <h4 style={{ textAlign: "center", color: "#0c6a9e" }}>News</h4>
        <br />
        {this.state.contents.map((content) => (
          <ul
            key={content.id}
            style={{
              listStyle: "none",
              border: "1px solid #0c6a9e",
              borderRadius: "10px",
            }}
          >
            <img
              src={content.image}
              alt=""
              style={{
                width: "80px",
                height: "80px",
                marginLeft: "-25px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <li
              style={{
                padding: "20px",
                width: "500px",
                marginLeft: "75px",
                marginTop: "-110px",
              }}
            >
              {content.contentName}
            </li>
            <a
              href="/"
              data-bs-toggle="tooltip"
              title="tooltip"
              style={{ color: "#0c6a9e",position:"absolute",marginLeft:"450px",marginTop:"-35px"}}
            >
              Read more
            </a>
          </ul>
        ))}
      </div>
    );
  }
}
