"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import FormProvider from "@/app/components/FormProvider/FormProvider";
import Iconify from "@/app/components/Iconify/Iconify";
import MainSelect from "@/app/components/Select/MainSelect";
import DataTable from "@/app/components/Grid/MainGrid";
import mockPagePrincipal from "@/app/components/Grid/mockPaginaPrincipal";
import mockPostes from "@/app/components/Grid/mockPostes";

export default function DetalhesPoste({ display }: any) {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  let defaultValues = {
    status: "Iniciada",
    status_poste: "Liberada",
  };
  const methods = useForm({
    mode: "onBlur",
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(() => {})}>
      <Grid
        display={display ? "flex" : "none"}
        alignItems={"center"}
        alignContent={"center"}
        alignSelf={"center"}
        justifyContent={"center"}
        container
        mt={isXs ? "20dvh" : 0.5}
        xs={12}
      >
        <Grid
          alignItems={"center"}
          alignContent={"center"}
          alignSelf={"center"}
          justifyContent={"center"}
          item
          xs={12}
          sm={11.9}
          md={11.8}
          xl={11.5}
        >
          <DataTable
            hidedColumns={[
              {
                xs: ["acessos", "percentualArea", "qntdCabos"],
                sm: ["acessos"],
                md: ["acessos"],
              },
            ]}
            header={[
              {
                field: "id",
                headerName: "Slot ID",
                width: isXs ? 130 : isSm ? 200 : isMd ? 90 : isLg ? 125 : 95,
              },
              {
                field: "cnpj",
                headerName: "CNPJ da Operadora",
                width: isXs ? 150 : isSm ? 300 : isMd ? 185 : isLg ? 220 : 250,
              },
              {
                field: "qntdCabos",
                headerName: "Quantidade de Cabos",
                width: isXs ? 75 : isSm ? 300 : isMd ? 185 : isLg ? 220 : 250,
              },
              {
                field: "acessos",
                headerName: "Total de Acessos",
                width: isXs ? 50 : isSm ? 300 : isMd ? 200 : isLg ? 300 : 280,
              },
              {
                field: "percentualArea",
                headerName: "Percentual de Área Exposta",
                width: isXs ? 75 : isSm ? 100 : isMd ? 200 : isLg ? 300 : 290,
              },
            ]}
            data={mockPostes}
            isDetalhesTable
          />
        </Grid>
      </Grid>
    </FormProvider>
  );
}
