import React, {useEffect, useState} from "react";
import AddBalance from "./addBalance";
import AddExpenses from './expenses';
import './mobileView.css';

export default function WalletBalance({walletBalance, refreshBalance}) {
  let [open, setOpen] = useState(false);
 

  let handleClick = () => {
    console.log("button is clicked");
    setOpen(true);
  };

  let handleClose = () => {
    console.log("close button is clicked");
    setOpen(false);
  };

  return (
    <>
      <div
        className="WalletContainer"
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
          className="wallentContent"
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
            {`Wallet Balance: ₹${walletBalance}`}
          </p>
          <button
            type="button"
            style={{
              backgroundColor: "#89E148",
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
            + Add Income
          </button>
        </div>
      </div>
      <AddBalance
        isOpen={open}
        isClose={handleClose}
        onBalanceAdded={refreshBalance}
      />
      
    </>
  );
}
