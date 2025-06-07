import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Expenses from "./expenses";

export default function AddExpenses({ isOpen, isClose }) {
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
            height: "325px",
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
                paddingLeft: '15px'
              }}
            />
            <input
              type="text"
              placeholder="Price"
              style={{
                width: "215px",
                height: "50px",
                borderRadius: "15px",
                border: "1px solid #D9D9D9",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "#919191",
                paddingLeft: '15px'
              }}
            />
            <input
              type="text"
              placeholder="Select Category"
              style={{
                width: "215px",
                height: "50px",
                borderRadius: "15px",
                border: "1px solid #D9D9D9",
                boxShadow: "0px 4px 4px 0px #00000040",
                color: "#919191",
                paddingLeft: '15px'
              }}
            />
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
                paddingLeft: '15px'
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "40px",
            gap: '10px',
            marginBottom: '20px'
          }}
        >
          <Button
            onClick={isClose}
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
