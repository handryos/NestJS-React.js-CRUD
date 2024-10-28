"use client";

import React, { useState } from "react";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import FormProvider from "@/app/components/FormProvider/FormProvider";
import Iconify from "@/app/components/Iconify/Iconify";
import MainSelect from "@/app/components/Select/MainSelect";
import DataTable from "@/app/components/Grid/MainGrid";
import mockPagePrincipal from "@/app/components/Grid/mockPaginaPrincipal";

export default function ListaProjetos({ display }: any) {
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
        mt={isXs ? "20dvh" : 0.5}
        display={display ? "flex" : "none"}
        alignItems={"center"}
        alignContent={"center"}
        alignSelf={"center"}
        justifyContent={"center"}
        container
        xs={12}
      >
        <Grid
          alignItems={"center"}
          alignContent={"center"}
          alignSelf={"center"}
          justifyContent={"center"}
          item
          xs={11}
          sm={11.9}
          md={11.8}
          xl={11.8}
        >
          <DataTable
            hidedColumns={[
              {
                xs: [
                  "unidadeCelesc",
                  "statusLiberacao",
                  "statusInstalacao",
                  "status",
                ],
                sm: ["statusInstalacao"],
                md: ["statusInstalacao"],
              },
            ]}
            header={[
              {
                field: "id",
                headerName: "ID",
                width: isXs ? 100 : isSm ? 250 : isMd ? 90 : isLg ? 125 : 205,
              },
              {
                field: "unidadeCelesc",
                headerName: "Unidade Celesc",
                width: isXs ? 75 : isSm ? 300 : isMd ? 185 : isLg ? 220 : 250,
              },
              {
                field: "cnpj",
                headerName: "CNPJ",
                width: isXs ? 180 : isSm ? 380 : isMd ? 200 : isLg ? 300 : 200,
              },
              {
                field: "statusLiberacao",
                headerName: "Status de Liberação",
                width: isXs ? 75 : isSm ? 380 : isMd ? 200 : isLg ? 250 : 250,
              },
              {
                field: "statusInstalacao",
                headerName: "Status de Instalação",
                width: isXs ? 75 : isSm ? 380 : isMd ? 125 : isLg ? 150 : 280,
              },
            ]}
            data={mockPagePrincipal}
            isDetalhesTable
          />
        </Grid>
      </Grid>
    </FormProvider>
  );
}
