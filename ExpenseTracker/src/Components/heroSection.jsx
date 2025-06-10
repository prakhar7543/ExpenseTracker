import React, { useEffect, useState } from "react";
import WalletBalance from "./wallet";
import Expenses from "./expenses";
import PieChartTracker from "./pieChart";
import RecentTransactions from "./recentTransactions";
import BarGraph from "./barGraph";
import './mobileView.css';

export default function HeroComponent() {
  let [balance, setBalance] = useState('5000');
  let [expense, setExpense] = useState("");
  let [categoryData, setCategoryData] = useState([]);
  let [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    let savedBalance = JSON.parse(localStorage.getItem("balance")) || 5000;
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
        id: item.id,
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
          height: "100%",
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

      <div className="mainContainer" style={{marginBottom:'30px'}}>

        <div className="transactionHeader">
        <h2
          style={{
            color: "white",
            marginLeft: "32px",
            marginTop: "25px",
            marginBottom: "unset",
            fontStyle: "italic",
            fontWeight: "700",
            display: "flex",
          }}
        >
          Recent Transactions
        </h2>
        </div>

        <div
          className="childMainContainer"
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <RecentTransactions
            transactionList={transactionList}
            refreshBalance={refreshBalance}
            refreshExpense={refreshExpense}
            refreshCategory={refreshCategory}
            refreshTransaction={refreshTransaction}
          />
          <BarGraph category={categoryData} />
        </div>
      </div>
    </div>
  );
}
