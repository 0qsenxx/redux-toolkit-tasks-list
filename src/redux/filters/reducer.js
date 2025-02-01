import { createReducer } from "@reduxjs/toolkit";
import { setStatusFilter } from "./actions";

const filtersInitialState = {
  status: "all",
};

const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => ({
    ...state,
    status: action.payload,
  }));
});

export { filtersReducer };
