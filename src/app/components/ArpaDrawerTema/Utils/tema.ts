"use client";
import { changeColor, changeThemeMode } from "@/app/redux/slices/Theme";
import { dispatch } from "@/app/redux/store";

export const changeDarkMode = (value: boolean) => {
  dispatch(changeThemeMode(value));
};

export const changeColorPreset = (value: number) => {
  dispatch(changeColor(value));
};
