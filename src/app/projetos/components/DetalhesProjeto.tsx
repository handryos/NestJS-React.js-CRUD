"use client";

import React, { useEffect, useState } from "react";
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
import mockDetalhesProjeto from "@/app/components/Grid/mockDetalhesProjeto";
import ProjetoService from "@/app/services/CrudPadrao/Projetos/ProjetoService";

export default function DetalhesProjeto({
  display,
  postes,
  checkFunction,
  codigoProjeto,
  projeto,
}: {
  display: boolean;
  postes: any[];
  codigoProjeto: number;
  checkFunction: (data: any) => void;
  projeto: any;
}) {
  const [isChanging, setChanging] = useState<boolean>(false);
  const [isChanging2, setChanging2] = useState<boolean>(false);

  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isMobileNotPhone = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("sm", "lg")
  );

  let defaultValues = {
    statusLiberacao: projeto && projeto.statusDeLiberacao,
    statusInstalacao: projeto && projeto.statusDeInstalacao,
  };

  const methods = useForm({
    mode: "onBlur",
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = methods;

  const [statusLiberacao, setStatusLib] = useState("");
  const [statusInstalacao, setStatusInst] = useState("");

  useEffect(() => {
    setStatusInst(projeto?.statusDeInstalacao);
    setStatusLib(projeto?.statusDeLiberacao);
  }, [projeto]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(() => {})}>
      <Grid
        display={display ? "flex" : "none"}
        alignItems={"center"}
        alignContent={"center"}
        alignSelf={"center"}
        justifyContent={"center"}
        container
        padding={1}
        spacing={1}
        xs={12}
      >
        <Grid
          mt={isXs ? "20dvh" : 0.5}
          borderRadius={2}
          border={"solid 0px"}
          boxShadow={4}
          item
          ml={1}
          spacing={2}
          xl={9.8}
          xs={12}
          md={11.5}
          sm={11.5}
          container
        >
          <Grid
            width={isXs ? "100%" : undefined}
            textAlign={isXs ? "start" : "center"}
            item
            sm={4}
            xs={12}
          >
            <Typography
              fontSize={isXs ? "1.02rem" : undefined}
              color={"#274375"}
              variant={isXs ? undefined : "h6"}
              component={isMobileNotPhone ? "div" : "span"}
            >
              Projeto ID:{" "}
              <Typography
                component={isMobileNotPhone ? "div" : "span"}
                sx={{ fontSize: isMobileNotPhone ? 14 : 16, color: "black" }}
              >
                {projeto?.codigoProjeto}
              </Typography>
            </Typography>
          </Grid>
          <Grid
            width={isXs ? "100%" : undefined}
            textAlign={isXs ? "start" : "center"}
            item
            sm={4}
            xs={12}
          >
            <Typography
              fontSize={isXs ? "1.02rem" : undefined}
              color={"#274375"}
              variant={isXs ? undefined : "h6"}
              component={isMobileNotPhone ? "div" : "span"}
            >
              Unidade Celesc:{" "}
              <Typography
                component={isMobileNotPhone ? "div" : "span"}
                sx={{ fontSize: isMobileNotPhone ? 14 : 16, color: "black" }}
              >
                {projeto?.unidadeCelesc}
              </Typography>
            </Typography>
          </Grid>
          <Grid
            width={isXs ? "100%" : undefined}
            textAlign={isXs ? "start" : "center"}
            item
            sm={4}
            xs={12}
          >
            <Typography
              fontSize={isXs ? "1.02rem" : undefined}
              color={"#274375"}
              variant={isXs ? undefined : "h6"}
              component={isMobileNotPhone ? "div" : "span"}
            >
              CNPJ:{" "}
              <Typography
                component={isMobileNotPhone ? "div" : "span"}
                sx={{ fontSize: isMobileNotPhone ? 14 : 16, color: "black" }}
              >
                {projeto?.cnpj}
              </Typography>
            </Typography>
          </Grid>
          <Grid
            width={isXs ? "100%" : undefined}
            textAlign={isXs ? "start" : "center"}
            item
            sm={4}
            xs={12}
          >
            <Typography
              fontSize={isXs ? "1.02rem" : undefined}
              color={"#274375"}
              variant={isXs ? undefined : "h6"}
              component={isMobileNotPhone ? "div" : "span"}
            >
              Tipo de Cabo:{" "}
              <Typography
                component={isMobileNotPhone ? "div" : "span"}
                sx={{ fontSize: isMobileNotPhone ? 14 : 16, color: "black" }}
              >
                {projeto?.tipoDoCabo}
              </Typography>
            </Typography>
          </Grid>
          <Grid
            width={isXs ? "100%" : undefined}
            textAlign={isXs ? "start" : "center"}
            item
            sm={4}
            xs={12}
          >
            <Typography
              width={"100%"}
              fontSize={isXs ? "1.02rem" : undefined}
              color={"#274375"}
              variant={isXs ? undefined : "h6"}
              component={isMobileNotPhone ? "div" : "span"}
            >
              Status de Instalação:{" "}
              <Typography
                width={"100%"}
                component={isMobileNotPhone ? "div" : "span"}
                sx={{ fontSize: isMobileNotPhone ? 15 : 16, color: "black" }}
              >
                {isChanging ? "..." : statusInstalacao}
                <IconButton
                  sx={{
                    ":hover": {
                      transform: "scale(1.10)",
                      transition: "transform 0.2s ease-in-out",
                      bgcolor: "transparent",
                    },
                  }}
                  onClick={() => setChanging(true)}
                >
                  <Iconify
                    padding={0}
                    mb={0.3}
                    icon={
                      isChanging
                        ? "material-symbols:edit"
                        : "material-symbols:edit-outline"
                    }
                    sx={{ ml: 1, color: "#274375", fontSize: 20 }}
                  />
                </IconButton>
                <Stack
                  display={isChanging ? "flex" : "none"}
                  direction={"column"}
                  width={"100%"}
                  spacing={1}
                  alignItems="center"
                >
                  <MainSelect
                    gridProps={{ xs: 8, width: "100%" }}
                    sx={{ minWidth: "100%" }}
                    name="statusInstalacao"
                  >
                    <MenuItem
                      onClick={() => {
                        setStatusInst("Concluida");
                      }}
                      value={"Concluida"}
                    >
                      Concluida
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setStatusInst("Em andamento");
                      }}
                      value={"Em andamento"}
                    >
                      Em andamento
                    </MenuItem>
                  </MainSelect>
                  <IconButton
                    sx={{
                      ":hover": {
                        transform: "scale(1.02)",
                        transition: "transform 0.2s ease-in-out",
                      },
                    }}
                    onClick={() => {
                      setChanging(false);
                      ProjetoService.update(codigoProjeto, {
                        statusDeInstalacao:
                          statusInstalacao != "Concluida" ? 0 : 1,
                      });
                    }}
                  >
                    <Iconify color={"#274375"} icon={"material-symbols:save"} />
                  </IconButton>
                </Stack>
              </Typography>
            </Typography>
          </Grid>
          <Grid
            width={isXs ? "100%" : undefined}
            textAlign={isXs ? "start" : "center"}
            item
            sm={4}
            xs={12}
          >
            <Typography
              fontSize={isXs ? "1.02rem" : undefined}
              color={"#274375"}
              variant={isXs ? undefined : "h6"}
              component={isMobileNotPhone ? "div" : "span"}
            >
              Status de Liberação:{" "}
              <Typography
                component={isMobileNotPhone ? "div" : "span"}
                sx={{ fontSize: 15, color: "black" }}
              >
                {isChanging2 ? "..." : statusLiberacao}
                <IconButton
                  sx={{
                    ":hover": {
                      transform: "scale(1.10)",
                      transition: "transform 0.2s ease-in-out",
                      bgcolor: "transparent",
                    },
                  }}
                  onClick={() => setChanging2(true)}
                >
                  <Iconify
                    padding={0}
                    mb={0.3}
                    icon={
                      isChanging2
                        ? "material-symbols:edit"
                        : "material-symbols:edit-outline"
                    }
                    sx={{ ml: 1, color: "#274375", fontSize: 20 }}
                  />
                </IconButton>
                <Stack
                  display={isChanging2 ? "flex" : "none"}
                  direction={"column"}
                  width={"100%"}
                  spacing={1}
                  alignItems="center"
                >
                  <MainSelect
                    gridProps={{ xs: 8, width: "100%" }}
                    sx={{ minWidth: "100%" }}
                    name="statusLiberacao"
                  >
                    <MenuItem
                      onClick={() => {
                        setStatusLib("Liberado");
                      }}
                      value={"Liberado"}
                    >
                      Liberado
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setStatusInst("Não Liberado");
                      }}
                      value={"Nao Liberado"}
                    >
                      Não Liberado
                    </MenuItem>
                  </MainSelect>
                  <IconButton
                    sx={{
                      ":hover": {
                        transform: "scale(1.02)",
                        transition: "transform 0.2s ease-in-out",
                      },
                    }}
                    onClick={() => {
                      setChanging2(false);
                      ProjetoService.update(codigoProjeto, {
                        statusDeLiberacao:
                          statusLiberacao != "Liberado" ? 0 : 1,
                      });
                    }}
                  >
                    <Iconify color={"black"} icon={"material-symbols:save"} />
                  </IconButton>
                </Stack>
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          alignItems={"center"}
          alignContent={"center"}
          alignSelf={"center"}
          justifyContent={"center"}
          item
          mt={2}
          container
          display={"flex"}
          xs={12}
          xl={10}
        >
          <DataTable
            id="codigoPoste"
            onCheck={(data) => checkFunction(data)}
            isDetalhesTable={true}
            hidedColumns={[
              {
                xs: ["longitude"],
              },
            ]}
            header={[
              {
                field: "codigoPoste",
                headerName: "Poste ID",
                width: isXs
                  ? 150
                  : isSm
                  ? 200
                  : isMd
                  ? 200
                  : isLg
                  ? 250
                  : isXl
                  ? 500
                  : 300,
              },
              {
                field: "latitude",
                headerName: "Latitude",
                width: isXs
                  ? 150
                  : isSm
                  ? 300
                  : isMd
                  ? 200
                  : isLg
                  ? 250
                  : isXl
                  ? 400
                  : 420,
              },
              {
                field: "longitude",
                headerName: "Longitude",
                width: isXs
                  ? 190
                  : isSm
                  ? 300
                  : isMd
                  ? 200
                  : isLg
                  ? 250
                  : isXl
                  ? 550
                  : 400,
              },
            ]}
            data={postes}
          />
        </Grid>
      </Grid>
    </FormProvider>
  );
}
