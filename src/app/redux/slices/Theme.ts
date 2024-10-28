"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ConfiguracaoTema = {
  indexColor: number;
  darkMode: boolean;
};

export const initialState: ConfiguracaoTema = {
  indexColor: 0,
  darkMode: false,
};

const slice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    changeThemeMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    changeColor: (state, action: PayloadAction<number>) => {
      state.indexColor = action.payload;
    },

    reset: (state) => {
      state = initialState;
      return state;
    },
  },
});

export default slice.reducer;
export const { changeThemeMode, changeColor, reset } = slice.actions;
