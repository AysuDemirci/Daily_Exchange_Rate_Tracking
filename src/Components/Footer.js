import React from "react";
import {
  FaYoutube,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Footer() {
  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "#07467c",
        boxShadow: "rgba(0, 0, 0, 1) 0px 22px 70px 14px",
      }}
    >
      <br />
      <br />
      <div style={{ width: "650px", textAlign: "end", marginTop: "-20px" }}>
        <span style={{ fontSize: "12px", marginLeft: "30px", color: "white" }}>
          This page and its contents are protected by copyright laws to ensure
          that data is not stolen. Please respect the intellectual property
          rights of others and refrain from stealing or using their content
          without permission.
        </span>
      </div>
      <h6 style={{marginLeft:"1240px",color:"white",fontSize:"16px",marginTop:"-35px"}}>Follow us for current content !  </h6>
      <div style={{ marginLeft: "1450px", marginTop: "-35px" }}>
        
        <ul
          style={{
            display: "flex",
            gap: "10px",
            color: "white",
            listStyle: "none",
          }}
        >
          <li>
            <button style={{ borderColor: "#07467c", borderRadius: "5px"}}>
              <FaFacebookSquare style={{ width: "20px", height: "25px",color:"#07467c" }} />
            </button>
          </li>
          <li>
            <button style={{ borderColor: "#07467c", borderRadius: "5px" }}>
              <FaYoutube style={{ width: "20px", height: "25px",color:"red" }} />
            </button>
          </li>
          <li>
            <button style={{ borderColor: "#07467c", borderRadius: "5px" }}>
              <FcGoogle style={{ width: "20px", height: "25px", }} />
            </button>
          </li>
          <li>
            <button style={{ borderColor: "#07467c", borderRadius: "5px" }}>
              <FaTwitterSquare style={{ width: "20px", height: "25px",color:"#07467c" }} />
            </button>
          </li>
          <li>
            <button style={{ borderColor: "#07467c", borderRadius: "5px" }}>
              <FaInstagramSquare style={{ width: "20px", height: "25px",color:"purple"}} />
            </button>
          </li>
         
          
        </ul>
      </div>
    </div>
  );
}
