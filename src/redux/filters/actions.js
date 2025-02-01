import { createAction } from "@reduxjs/toolkit";

const setStatusFilter = createAction("filters/setStatusFilter", (value) => ({
  payload: value,
}));

export { setStatusFilter };
