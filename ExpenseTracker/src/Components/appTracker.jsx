import React from "react";
import HeroComponent from './heroSection';
// import MainSection from "./mainSection";

export default function AppTracker() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#3B3B3B",
        width: "95vw",
        height: "781px",
        margin: "auto",
        borderRadius: '5px',
      }}
    >
      <div className="content">
        <h2 style={{ color: "white", paddingLeft: "32px", paddingTop: '7px' }}>Expense Tracker</h2>
        <HeroComponent />
       
      </div>
    </div>
  );
}
