import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSnackbar } from "notistack";
import WalletBalance from "./wallet";
import Expenses from "./expenses";
import { Snackbar } from "@mui/material";
import samosa from "../assets/samosa.png";
import shoping from "../assets/shoping.png";
import travel from "../assets/travel.png";

export default function AddExpenses({ isOpen, isClose, onExpenseAdded }) {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState("");
  let [categoryImage, setCategoryImage] = useState("");
  let [date, setDate] = useState("");
  let [walletBalance, setWalletBalance] = useState("");
  let { enqueueSnackbar } = useSnackbar();

  function walletBalanceInLocalStorage() {
    let totalBalance = parseFloat(localStorage.getItem("balance")) || 0;
    setWalletBalance(totalBalance);
  }

  useEffect(() => {
    walletBalanceInLocalStorage();
  }, [price, walletBalance]);

  function addToLocalStorage() {
    if (!title || !price || !category || !date || !categoryImage) {
      return;
    }

    let newExpense = {
      id: Date.now(),
      title: title.capitalise(),
      price: parseFloat(price),
      category,
      categoryImage: categoryImage ,
      date: date,
    };

    let existingData = JSON.parse(localStorage.getItem("expenses")) || [];
    existingData.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(existingData));
  }

  let handleClick = () => {
    if (price > walletBalance) {
      enqueueSnackbar("Insufficient Balance", { variant: "error" });
      return;
    }

    addToLocalStorage();
    let newWalletBalance = walletBalance - parseFloat(price);
    localStorage.setItem("balance", JSON.stringify(newWalletBalance));
    setWalletBalance(newWalletBalance);
    onExpenseAdded();

    isClose();
  };

  let handleCategoryChange = (e) => {
    let categoryName = e.target.value;
    if (categoryName) {
      if (categoryName == "travel") {
        setCategoryImage(travel);
      } else if (categoryName == "food") {
        setCategoryImage(samosa);
      } else if (categoryName === "shopping") {
        setCategoryImage(shoping);
      }
    }
    setCategory(categoryName);
  };

  return (
    <React.Fragment>
      <style>
        {`
      input::placeholder {
        padding-left: 10px;
      }
    `}
      </style>
      <Dialog
        open={isOpen}
        onClose={isClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "540px",
            height: "310px",
            backgroundColor: "#EFEFEFD9",
            borderRadius: "15px",
            textAlign: "start",
            overflowY: "hidden",
          },

          "& .MuiTypography-root": {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          },

          "& .MuiDialogTitle-root": {
            fontFamily: "ubuntu",
            fontSize: "30px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          },

          "& .MuiDialogContent-root": {
            overflowY: "hidden",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Add Expenses"}</DialogTitle>
        <DialogContent
          sx={{
            msOverflowY: "hidden",
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            sx={{ width: "100%", height: "100%" }}
          >
            <input
              type="text"
              placeholder="Title"
              style={{
                width: "215px",
                height: "50px",
                borderRadius: "15px",
                border: "1px solid #D9D9D9",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "#919191",
                paddingLeft: "15px",
              }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              style={{
                width: "215px",
                height: "50px",
                borderRadius: "15px",
                border: "1px solid #D9D9D9",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "#919191",
                paddingLeft: "15px",
              }}
              onChange={(e) => setPrice(e.target.value)}
            />

            <select
              name="category"
              id="category"
              style={{
                width: "234px",
                height: "50px",
                borderRadius: "15px",
                border: "1px solid #D9D9D9",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "#919191",
                paddingLeft: "15px",
              }}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="shopping">Shopping</option>
            </select>

            <input
              type="date"
              placeholder="dd/mm/yyyy"
              style={{
                width: "215px",
                height: "50px",
                borderRadius: "15px",
                border: "1px solid #D9D9D9",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "#919191",
                paddingLeft: "15px",
              }}
              onChange={(e) => setDate(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "40px",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <Button
            onClick={handleClick}
            type="submit"
            sx={{
              width: "223px",
              height: "50px",
              backgroundColor: "#F4BB4A",
              color: "white",
              fontFamily: "sans-serif",
              fontWeight: "700",
              borderRadius: "15px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            Add Expense
          </Button>
          <Button
            onClick={isClose}
            autoFocus
            sx={{
              width: "112px",
              height: "50px",
              backgroundColor: "#D9D9D9",
              color: "black",
              fontFamily: "sans-serif",
              // fontWeight: "700",
              borderRadius: "15px",
              boxShadow: "0px 4px 4px 0px #00000040",
              // paddingLeft: "20px",
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
