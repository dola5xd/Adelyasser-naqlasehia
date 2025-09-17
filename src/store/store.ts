import { configureStore, Reducer } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import modeReducer from "../features/modeSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer as Reducer,
    mode: modeReducer as Reducer,
    search: searchReducer as Reducer,
  },
  middleware: (getDefault) => getDefault(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
