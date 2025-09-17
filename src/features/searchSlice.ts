import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearSearch: (state) => {
      state.query = "";
    },
  },
});

export const { setSearchQuery, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;

export const selectSearch = (state: RootState) => state.search.query;
