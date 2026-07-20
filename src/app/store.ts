/*
This file will contains global application state for Dashboar app, all Reducer and middleware will be configured here
*/

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
