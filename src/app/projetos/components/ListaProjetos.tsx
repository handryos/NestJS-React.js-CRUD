"use client";

import React, { useEffect, useState } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import FormProvider from "@/app/components/FormProvider/FormProvider";
import DataTable from "@/app/components/Grid/MainGrid";
import mockPagePrincipal from "@/app/components/Grid/mockPaginaPrincipal";
import ProjetoService from "@/app/services/CrudPadrao/Projetos/ProjetoService";

export default function ListaProjetos({
  display,
  checkFunction,
}: {
  display: boolean;
  checkFunction: (data: any) => void;
}) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const [projetos, setProjetos] = useState<any[]>([]);

  useEffect(() => {
    let projeto = ProjetoService.getAllProjetos();
    projeto.then((res) => {
      setProjetos(res.data.data as any[]);
    });
  }, [display]);

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
          sm={12}
          md={12}
          mb={1}
          xl={isXl ? 10 : 12}
        >
          <DataTable
            onCheck={(data) => checkFunction(data)}
            id={"codigoProjeto"}
            hidedColumns={[
              {
                xs: [
                  "unidadeCelesc",
                  "statusDeLiberacao",
                  "statusDeInstalacao",
                  "status",
                ],
                sm: ["statusDeInstalacao", "unidadeCelesc"],
                md: ["statusDeInstalacao", "unidadeCelesc"],
                lg: [],
              },
            ]}
            header={[
              {
                field: "codigoProjeto",
                headerName: "ID do Projeto",
                width: isXs
                  ? 100
                  : isSm
                  ? 250
                  : isMd
                  ? 170
                  : isLg
                  ? 255
                  : isXl
                  ? 200
                  : 180,
              },
              {
                field: "unidadeCelesc",
                headerName: "Unidade Celesc",
                width: isXs
                  ? 75
                  : isSm
                  ? 300
                  : isMd
                  ? 185
                  : isLg
                  ? 200
                  : isXl
                  ? 200
                  : 255,
              },
              {
                field: "cnpj",
                headerName: "CNPJ",
                width: isXs
                  ? 180
                  : isSm
                  ? 300
                  : isMd
                  ? 200
                  : isLg
                  ? 280
                  : isXl
                  ? 300
                  : 255,
              },
              {
                field: "statusDeLiberacao",
                headerName: "Status de Liberação",
                width: isXs
                  ? 75
                  : isSm
                  ? 380
                  : isMd
                  ? 200
                  : isLg
                  ? 220
                  : isXl
                  ? 300
                  : 200,
              },
              {
                field: "statusDeInstalacao",
                headerName: "Status de Instalação",
                width: isXs
                  ? 75
                  : isSm
                  ? 380
                  : isMd
                  ? 125
                  : isLg
                  ? 150
                  : isXl
                  ? 520
                  : 255,
              },
            ]}
            data={projetos}
            isDetalhesTable={false}
          />
        </Grid>
      </Grid>
    </FormProvider>
  );
}
