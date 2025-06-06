import React from "react";
import HeroComponent from './heroSection';

export default function AppTracker() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "black",
        width: "95vw",
        height: "100vh",
        margin: "auto",
        borderRadius: '5px',
      }}
    >
      <div className="content">
        <h2 style={{ color: "white", paddingLeft: "32px" }}>Expense Tracker</h2>
        <HeroComponent />
      </div>
    </div>
  );
}
