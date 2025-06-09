import React, { useEffect, useState } from "react";
import WalletBalance from "./wallet";
import Expenses from "./expenses";
import PieChartTracker from "./pieChart";
import RecentTransactions from "./recentTransactions";

export default function HeroComponent() {
  let [balance, setBalance] = useState("");
  let [expense, setExpense] = useState("");
  let [categoryData, setCategoryData] = useState([]);
  let [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    let savedBalance = JSON.parse(localStorage.getItem("balance")) || 0;
    setBalance(savedBalance);
  }, []);

  useEffect(() => {
    let savedExpense = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalExpense = 0;
    savedExpense.forEach((item) => {
      totalExpense += item.price;
    });
    setExpense(totalExpense);
  }, []);

  useEffect(() => {
    refreshCategory();
  }, []);

  useEffect(() => {
    refreshTransaction();
  }, []);

  let refreshBalance = () => {
    let savedBalance = JSON.parse(localStorage.getItem("balance")) || 0;
    setBalance(savedBalance);
  };

  let refreshExpense = () => {
    let savedExpense = JSON.parse(localStorage.getItem("expenses")) || 0;
    let totalExpense = 0;
    savedExpense.forEach((item) => {
      totalExpense += item.price;
    });
    setExpense(totalExpense);
  };

  let refreshCategory = () => {
    let savedCategory = JSON.parse(localStorage.getItem("expenses")) || [];

    let categoryMap = {};

    savedCategory.forEach((item) => {
      if (categoryMap[item.category]) {
        categoryMap[item.category] += item.price;
      } else {
        categoryMap[item.category] = item.price;
      }
    });

    let newCategoryArray = Object.keys(categoryMap).map((key) => ({
      name: key,
      price: categoryMap[key],
    }));
    setCategoryData(newCategoryArray);
    console.log("categoryData", newCategoryArray);
  };

  let refreshTransaction = () => {
    let savedTransaction = JSON.parse(localStorage.getItem("expenses")) || [];
    let list = [];
    savedTransaction.forEach((item) => {
      list.push({
        title: item.title,
        price: item.price,
        categoryImage: item.categoryImage,
        date: item.date,
      });
    });
    setTransactionList(list);
    console.log("transactionList", list);
  };

  return (
    <div className="outerContainer" style={{ height: "100%", width: "100%" }}>
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
        <WalletBalance
          walletBalance={balance}
          refreshBalance={refreshBalance}
        />
        <Expenses
          refreshBalance={refreshBalance}
          refreshExpense={refreshExpense}
          expense={expense}
          refreshCategory={refreshCategory}
          refreshTransaction={refreshTransaction}
        />
        <PieChartTracker category={categoryData} />
      </div>

      <div className="mainContainer">
        <h2
          style={{
            color: "white",
            marginLeft: "32px",
            marginTop: "25px",
            marginBottom: "unset",
            fontStyle: "italic",
            fontWeight: '700',
          }}
        >
          Recent Transactions
        </h2>
        <RecentTransactions transactionList={transactionList} />
      </div>
    </div>
  );
}
