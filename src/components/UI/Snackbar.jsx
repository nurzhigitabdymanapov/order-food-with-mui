import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";
export const Snackbaaar = ({ handleClose }) => {
  const { open, message, severity } = useSelector((state) => state.snackbar);
  console.log(severity);
  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
