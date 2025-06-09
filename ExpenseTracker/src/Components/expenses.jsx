import React, { useState } from "react";
import AddExpenses from "./addExpenses";

export default function Expenses({
  refreshBalance,
  refreshExpense,
  expense,
  refreshCategory,
  refreshTransaction,
}) {
  let [open, setOpen] = useState(false);
  // let [expense, setExpense] = useState(0);

  let handleClick = () => setOpen(true);

  let handleClose = () => setOpen(false);

  return (
    <>
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
            {`Expenses: ₹${expense}`}
          </p>
          <button
            type="button"
            style={{
              backgroundColor: "#FF3838",
              width: "165px",
              height: "38px",
              color: "white",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
            }}
            onClick={handleClick}
          >
            + Add Expense
          </button>
        </div>
      </div>
      <AddExpenses
        isOpen={open}
        isClose={handleClose}
        onExpenseAdded={() => {
          refreshExpense();
          refreshBalance();
          refreshCategory();
          refreshTransaction();
        }}
      />
    </>
  );
}
