import React from "react";
import WalletBalance from "./wallet";
import Expenses from "./expenses";
import PieChartTracker from "./pieChart";
export default function HeroComponent() {
  return (
    <div
      className="heroContainer"
      style={{
        width: "95%",
        height: "270px",
        backgroundColor: "#626262",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <WalletBalance />
      <Expenses />
      <PieChartTracker />
    </div>
  );
}
