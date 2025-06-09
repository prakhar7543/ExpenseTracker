import React from "react";
import cancel from "../assets/cancel.png";
import edit from "../assets/edit.png";

//transactionConatiner>>>>>>>>>>
// margin-left: 32px;
// margin-top: 9px;

export default function RecentTransactions({ transactionList }) {
  return (
    <div
      className="transactionContainer"
      style={{
        width: "738px",
        height: "345px",
        backgroundColor: "white",
        borderRadius: "15px",
        marginLeft: "32px",
        marginTop: "9px",
      }}
    >
      <div className="ListContainer">
        {transactionList.map((item, index) => (
          <div
            className="parentOfListIitems"
            key={index}
            style={{ paddingTop: "20px" }}
          >
            <div
              className="listItems"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "0px 42px",
                height: "60px",
              }}
            >
              <div
                className="imgTitle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                  width: "140px",
                }}
              >
                <img
                  src={item.categoryImage}
                  alt="pic"
                  style={{
                    width: "38px",
                    height: "38px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div
                  className="title"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ marginBottom: "unset" }}>{item.title}</p>
                  <p style={{ marginTop: "unset" }}>{item.date}</p>
                </div>
              </div>

              <div
                className="priceImg"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "90px",
                  width: "150px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "larger", color: "#F4BB4A" }}>
                  &#8377; {item.price}
                </p>

                <div className="imagediv" style={{ display: "flex" }}>
                  <img
                    src={cancel}
                    alt="cancel"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "38px",
                      height: "38px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <img
                    src={edit}
                    alt="edit"
                    style={{
                      width: "38px",
                      height: "38px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ width: "660px", margin: "auto" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
//     height: 42px;
// align-items: end;
