import React from "react";
import cancel from "../assets/cancel.png";
import edit from "../assets/edit.png";

export default function RecentTransactions({ transactionList, refreshBalance,
          refreshExpense,  refreshCategory, refreshTransaction }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = transactionList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(transactionList.length / itemsPerPage);

  let handleRemove = (itemToRemove) => {
    console.log('cancel button is clicked');
    
    // let itemToRemove = item;

    let existingData = JSON.parse(localStorage.getItem("expenses")) || [];
    let updatedData = existingData.filter(
      (item) => item.id !== itemToRemove.id
    );
    localStorage.setItem("expenses", JSON.stringify(updatedData));

    refreshBalance();
    refreshExpense();
    refreshCategory();
    refreshTransaction();
  };

  return (
    <div
      className="transactionContainer"
      style={{
        width: "738px",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "15px",
        marginLeft: "32px",
        marginTop: "9px",
      }}
    >
      {transactionList && transactionList.length > 0 ? (
        <div className="ListContainer">
          {paginatedList.map((item, index) => (
            <div
              className="parentOfListIitems"
              key={index}
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
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
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                        objectPosition: "center",
                        pointerEvents: 'all',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleRemove(item)}
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

          {/* Pagination Controls */}
          {transactionList.length > itemsPerPage && (
            <div
              className="paginationControls"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                gap: "10px",
                paddingBottom: "10px",
              }}
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={{
                  padding: "8px",
                  fontSize: "16px",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  backgroundColor: "#f0f0f0",
                  border: "none",
                  borderRadius: "20px",
                }}
              >
                ←
              </button>

              <span
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                {currentPage}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < totalPages ? prev + 1 : prev
                  )
                }
                disabled={currentPage >= totalPages}
                style={{
                  padding: "8px",
                  fontSize: "16px",
                  cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
                  backgroundColor: "#f0f0f0",
                  border: "none",
                  borderRadius: "20px",
                }}
              >
                →
              </button>
            </div>
          )}
        </div>
      ) : (
        <div
          className="noTransaction"
          style={{
            height: "70px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <p style={{ fontSize: "large", fontWeight: "400" }}>
            No transactions !
          </p>
        </div>
      )}
    </div>
  );
}
