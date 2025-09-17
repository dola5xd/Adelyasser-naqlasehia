import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

// Slice state
interface ModeState {
  mode: "dark" | "light";
}

// Load from localStorage
const loadFromLocalStorage = (): ModeState => {
  const saved = localStorage.getItem("mode");
  if (saved === "dark" || saved === "light") {
    return { mode: saved };
  } else return { mode: "dark" };
};

const initialState: ModeState =
  typeof window !== "undefined" ? loadFromLocalStorage() : { mode: "light" };

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.mode = "dark";
      localStorage.setItem("mode", "dark");
    },
    setLightMode: (state) => {
      state.mode = "light";
      localStorage.setItem("mode", "light");
    },
    toggleMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("mode", state.mode);
    },
  },
});

// Exports
export const { setDarkMode, setLightMode, toggleMode } = modeSlice.actions;
export default modeSlice.reducer;

// Selector
export const selectMode = (state: RootState) => state.mode.mode;
