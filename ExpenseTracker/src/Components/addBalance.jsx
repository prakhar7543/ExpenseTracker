import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WalletBalance from "./wallet";

export default function AddBalance({ isOpen, isClose }) {
  return (
    <React.Fragment>
      <style>
        {`
      input::placeholder {
        padding-left: 5px;
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
            height: "146px",
            backgroundColor: "#EFEFEFD9",
            borderRadius: "15px",
            textAlign: "start",
            overflowY: "hidden",
          },

          "& .MuiTypography-root": {},

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
        <DialogTitle id="alert-dialog-title" sx={{ padding: "3px 15px" }}>
          {"Add Balance"}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            padding: "unset",
            flexDirection: "row",
            width: "100%",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            // sx={{ width: "100%", height: "100%" }}
          >
            <input
              type="text"
              placeholder="Income Amount"
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

          <DialogActions>
            <Button
              onClick={isClose}
              sx={{
                width: "145px",
                height: "50px",
                backgroundColor: "#F4BB4A",
                color: "white",
                fontFamily: "sans-serif",
                fontWeight: "700",
                borderRadius: "15px",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              Add Balance
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
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
