"use client";

import React, { useEffect } from "react";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import DataTable from "@/app/components/Grid/MainGrid";
import { dispatch, useSelector } from "@/app/redux/store";
import { getCountries } from "@/app/redux/slices/CountrieSlice";

export default function Countries() {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const countries = useSelector((state) => state.countrieSlice.countrie);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <>
      <Grid
        display={"flex"}
        alignItems={"center"}
        alignContent={"center"}
        alignSelf={"center"}
        justifyContent={"center"}
        container
        p={{ xs: 12, xl: 0, lg: 6 }}
        xs={12}
      >
        <Grid
          container
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={11.9}
            md={11.8}
            xl={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DataTable
              flag=""
              name=""
              id="countryCode"
              header={[
                {
                  field: "countryCode",
                  headerName: "Country Code",
                  width: isXs
                    ? 400
                    : isSm
                    ? 200
                    : isMd
                    ? 250
                    : isLg
                    ? 300
                    : 700,
                },
                {
                  field: "name",
                  headerName: "Name",
                  width: isXs
                    ? 400
                    : isSm
                    ? 200
                    : isMd
                    ? 300
                    : isLg
                    ? 300
                    : 800,
                },
              ]}
              data={countries}
              hidedColumns={[]}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
