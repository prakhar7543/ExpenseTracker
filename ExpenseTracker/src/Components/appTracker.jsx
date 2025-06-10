import React from "react";
import HeroComponent from './heroSection';
// import MainSection from "./mainSection";
import './mobileView.css';

export default function AppTracker() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#3B3B3B",
        width: "100vw",
        height: "100%",
        margin: "auto",
        borderRadius: '5px',
      }}
    >
      <div className="content">
        <div className="header" style={{height: '100%'}}>

        <h1 style={{ color: "white", paddingLeft: "32px", paddingTop: '7px', margin: '0px 0px 15px 0px' }}>Expense Tracker</h1>
        </div>
        <HeroComponent />
       
      </div>
    </div>
  );
}
