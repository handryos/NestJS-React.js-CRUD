"use client";

import React from "react";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
import FormProvider from "@/app/components/FormProvider/FormProvider";
import DataTable from "@/app/components/Grid/MainGrid";

export default function MachinesGrid({ display, slots, poste }: any) {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));
  const isXll = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

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
          xl={12}
        >
          <Grid mb={2} item></Grid>
          <DataTable
            removeCheckBox
            id="slotId"
            hidedColumns={[
              {
                xs: [
                  "acessos",
                  "percentualAreaDaAreaExposta",
                  "qntdCabos",
                  "cnpjOperadora",
                  "totalDeAcessos",
                ],
                sm: [
                  "acessos",
                  "percentualAreaDaAreaExposta",
                  "qntdCabos",
                  "cnpjOperadora",
                  "totalDeAcessos",
                ],
                md: [
                  "acessos",
                  "percentualAreaDaAreaExposta",
                  "qntdCabos",
                  "cnpjOperadora",
                  "totalDeAcessos",
                ],
              },
            ]}
            header={[
              {
                field: "slotId",
                headerName: "Slot ID",
                width: isXs ? 130 : isSm ? 200 : isMd ? 250 : isLg ? 225 : 200,
              },
              {
                field: "cnpjOperadora",
                headerName: "CNPJ da Operadora",
                width: isXs
                  ? 150
                  : isSm
                  ? 300
                  : isMd
                  ? 185
                  : isLg
                  ? 220
                  : isXl
                  ? 330
                  : 250,
              },
              {
                field: "quantidadeDeCabos",
                headerName: "Quantidade de Cabos",
                width: isXs ? 75 : isSm ? 300 : isMd ? 255 : isLg ? 360 : 220,
              },
              {
                field: "totalDeAcessos",
                headerName: "Total de Acessos",
                width: isXs ? 50 : isSm ? 300 : isMd ? 200 : isLg ? 320 : 220,
              },
              {
                field: "percentualDaAreaExposta",
                headerName: "Percentual de Área Exposta",
                width: isXs ? 75 : isSm ? 100 : isMd ? 200 : isLg ? 300 : 240,
              },
            ]}
            data={slots}
            isDetalhesTable
          />
        </Grid>
      </Grid>
    </FormProvider>
  );
}
