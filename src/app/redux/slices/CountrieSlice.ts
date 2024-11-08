"use client";
import CountreService from "@/app/services/Countries/Countries";
import Countrie from "@/app/types/Countrie";
/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  countrie: Countrie;
  countrieInfos: Countrie;
}

export const initialState: InitialState = {
  countrie: {
    name: "",
    borders: [],
    flag: "",
    population: [{ value: 0, year: 0 }],
  },
  countrieInfos: {
    name: "",
    borders: [],
    flag: "",
    population: [{ value: 0, year: 0 }],
  },
};

const slice = createSlice({
  name: "countreReducer",
  initialState,
  reducers: {
    setCountrie: (state, action: PayloadAction<Countrie>) => {
      state.countrie = action.payload;
    },
    setCountrieInfos: (state, action: PayloadAction<Countrie>) => {
      state.countrieInfos = action.payload;
    },

    reset: (state) => {
      state = initialState;
      return state;
    },
  },
});

export default slice.reducer;
export const { setCountrie, setCountrieInfos } = slice.actions;

export function getCountries() {
  return async (dispatch: any) => {
    try {
      const response = await CountreService.getAllCountries();
      if (response.status === 200) {
        dispatch(setCountrie(response.data.countries));
      } else {
        throw new Error("Failed to get all countries. Verify.");
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
}

export function getCountrieInfo(country: string, id: string, router: any) {
  return async (dispatch: any) => {
    try {
      const response = await CountreService.getCountryInfo(country, id);
      if (response.status === 200) {
        router.push("/routes/countrieInfos");
        dispatch(setCountrieInfos(response.data.countrieInfos));
      } else {
        throw new Error("Failed to get countrie infos. Verify.");
      }
    } catch (error) {
      console.error("Error fetching countrie infos:", error);
    }
  };
}
