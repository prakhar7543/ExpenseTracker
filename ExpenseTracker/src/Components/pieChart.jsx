// import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "./pieChart.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartTracker({ category }) {
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        position: "relative",
        top: "4px",
      }}
    >
      <PieChart width={200} height={260} style={{ top: "-25px" }}>
        <Pie
          data={category}
          cx={100}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="price"
          nameKey="name"
        >
          {category.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          iconSize={10}
          height={50}
          width={300}
          formatter={(value) => <span style={{ color: "white" }}>{value}</span>}
        />
      </PieChart>
    </div>
  );
}
