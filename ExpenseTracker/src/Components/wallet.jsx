import React, {useState} from "react";
import AddBalance from "./addBalance";

export default function WalletBalance() {
  let [open, setOpen] = useState(false);
  let [balance, setBalance] = useState(0);

  function showTotalBalance() {
    setBalance('');
    let totalAmount = JSON.parse(localStorage.getItem("balance")) || 0;
    setBalance(totalAmount);
  }

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
            {`Wallet Balance: ₹${balance}`}
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
        onBalanceAdded={showTotalBalance}
      />
    </>
  );
}
