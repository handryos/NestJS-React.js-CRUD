"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import DataTable from "@/app/components/Grid/MainGrid";
import { dispatch, useSelector } from "@/app/redux/store";
import { getCountries } from "@/app/redux/slices/CountrieSlice";
import QuantitysChart from "@/app/components/DashBoard/QuantitysChart";

export default function CountriesInfo() {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const countries = useSelector((state) => state.countrieSlice.countrieInfos);
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
        mt={2}
        p={{ xs: 12, xl: 0, lg: 6 }}
        xs={12}
      >
        <Grid
          container
          sx={{
            height: "90vh",
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
              useInfos
              name={countries.name}
              flag={countries.flag}
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
                    ? 200
                    : isLg
                    ? 200
                    : 700,
                },
                {
                  field: "commonName",
                  headerName: "Name",
                  width: isXs
                    ? 400
                    : isSm
                    ? 100
                    : isMd
                    ? 200
                    : isLg
                    ? 200
                    : 800,
                },
              ]}
              data={countries.borders}
              hidedColumns={[]}
            />
          </Grid>
          <Grid
            display={countries.name != "" ? "block" : "none"}
            item
            xs={12}
            mt={5}
            md={6}
          >
            <Box sx={{ height: "75dvh" }}>
              <QuantitysChart populationCounts={countries.population} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
