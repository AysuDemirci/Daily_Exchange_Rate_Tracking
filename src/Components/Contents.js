import React from "react";

export default function Contents() {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>News</h4>
      <br />
      <ul style={{ listStyle: "none" }}>
        <img
          src="../images/Mobil-ocak-2023-serbest-doviz-abd-dolari-fon-banner.png"
          alt=""
          style={{ width: "80px", height: "80px",marginLeft:"-15px" }}
        ></img>
        <li style={{ marginLeft: "100px",marginTop:"-80px", boxShadow:" 0 10px 20px -10px rgba(0,0,0,0.2)"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco...
          <a href="/" data-bs-toggle="tooltip" title="tooltip">
            Read more
          </a>
        </li>
        <br />
        <br />
        <img
          src="../images/news-241122-lebanon.bank_.jpg"
          alt=""
          style={{ width: "80px", height: "80px",marginLeft:"-15px" }}
        ></img>
        <li style={{ marginLeft: "100px",marginTop:"-80px",boxShadow:" 0 10px 20px -10px rgba(0,0,0,0.2)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut...
          <a href="/" data-bs-toggle="tooltip" title="tooltip">
            Read more
          </a>
        </li>
      </ul>
    </div>
  );
}
