// import "./styles.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./mobileView.css";
import './barGraph.css';

export default function BarGraph({ category }) {
  return (
    <div
      className="barGraphContainer"
      style={{
        height: "366px",
        width: "430px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: "15px",
        marginTop: "9px",
        marginRight: "32px",
        marginLeft: '15px'
      }}
    >
      <BarChart
        width={400}
        height={300}
        data={category}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar
          dataKey="price"
          fill="#A78BFA"
          barSize={20}
          radius={[0, 10, 10, 0]}
        />
      </BarChart>
    </div>
  );
}
