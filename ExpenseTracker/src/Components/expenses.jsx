import React from "react";

export default function Expenses() {
  return (
    <div
      className="expenseContainer"
      style={{
        width: "355px",
        height: "181px",
        backgroundColor: "#9B9B9B",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <div
        className="expenseContent"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            color: "white",
            font: "Ubuntu",
            fontWeight: "400",
            fontSize: "30px",
          }}
        >
          Expenses: ₹500
        </p>
        <button
          style={{
            backgroundColor: "#FF3838",
            width: "165px",
            height: "38px",
            color: "white",
            textAlign: "center",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
          }}
        >
          + Add Expense
        </button>
      </div>
    </div>
  );
}
