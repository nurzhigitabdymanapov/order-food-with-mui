import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: "",
  message: "",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    doSucces(state) {
      state.severity = "success";
      state.message = `Error notification`;
      state.open = true;
    },
    doError(state) {
      state.severity = "error";
      state.message = "Error notification";
      state.open = true;
    },
    doSuccesIncrement(state){
        state.severity = "success";
        state.message = " Success notification";
        state.open = true;
    },
    doErrorIncrement(state){
        state.severity = "error";
        state.message = "Error notification";
        state.open = true;
    }, doSuccesDecrement(state){
        state.severity = "success";
        state.message = " Success notification";
        state.open = true;
    },
    doErrorDecrement(state){
        state.severity = "error";
        state.message = "Error notification";
        state.open = true;
    },
    doClose(state){
        state.open = false;
    }
  },
});

export const snackbarReducer = snackbarSlice.reducer;
export const snackbarActions = snackbarSlice.actions;
