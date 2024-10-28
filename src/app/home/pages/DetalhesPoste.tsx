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
import mockDetalhesProjeto from "@/app/components/Grid/mockDetalhesProjeto";

export default function DetalhesProjeto({ display }: any) {
  const [isChanging, setChanging] = useState<boolean>(false);
  const [isChanging2, setChanging2] = useState<boolean>(false);

  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const isMobileNotPhone = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("sm", "md")
  );

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
          xl={7.6}
          xs={12}
          md={11.5}
          sm={11.5}
          container
        >
          <Grid textAlign={"center"} item sm={4} xs={12}>
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
                22222222
              </Typography>
            </Typography>
          </Grid>
          <Grid textAlign={"center"} item sm={4} xs={12}>
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
                998382
              </Typography>
            </Typography>
          </Grid>
          <Grid textAlign={"center"} item sm={4} xs={12}>
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
                093632183921
              </Typography>
            </Typography>
          </Grid>
          <Grid textAlign={"center"} item sm={4} xs={12}>
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
                333231
              </Typography>
            </Typography>
          </Grid>
          <Grid textAlign={"center"} item sm={4} xs={12}>
            <Typography
              fontSize={isXs ? "1.02rem" : undefined}
              color={"#274375"}
              variant={isXs ? undefined : "h6"}
              component={isMobileNotPhone ? "div" : "span"}
            >
              Status de Instalação:{" "}
              <Typography
                component={isMobileNotPhone ? "div" : "span"}
                sx={{ fontSize: isMobileNotPhone ? 15 : 16, color: "black" }}
              >
                {isChanging ? "..." : watch("status")}
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
                    name="status"
                  >
                    <MenuItem value={"Iniciada"}>Liberado</MenuItem>
                    <MenuItem value={"Não Iniciada"}>Não Liberado</MenuItem>
                  </MainSelect>
                  <IconButton
                    sx={{
                      ":hover": {
                        transform: "scale(1.02)",
                        transition: "transform 0.2s ease-in-out",
                      },
                    }}
                    onClick={() => setChanging(false)}
                  >
                    <Iconify color={"#274375"} icon={"material-symbols:save"} />
                  </IconButton>
                </Stack>
              </Typography>
            </Typography>
          </Grid>
          <Grid textAlign={"center"} item sm={4} xs={12}>
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
                {isChanging2 ? "..." : watch("status_poste")}
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
                    name="status_poste"
                  >
                    <MenuItem value={"Liberada"}>Iniciada</MenuItem>
                    <MenuItem value={"Não Liberada"}>Não Iniciada</MenuItem>
                  </MainSelect>
                  <IconButton
                    sx={{
                      ":hover": {
                        transform: "scale(1.02)",
                        transition: "transform 0.2s ease-in-out",
                      },
                    }}
                    onClick={() => setChanging2(false)}
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
          xl={7.8}
        >
          <DataTable
            hidedColumns={[
              {
                xs: ["longitude"],
              },
            ]}
            header={[
              {
                field: "id",
                headerName: "Poste ID",
                width: isXs ? 150 : isSm ? 200 : isMd ? 200 : isLg ? 300 : 400,
              },
              {
                field: "latitude",
                headerName: "Latitude",
                width: isXs ? 150 : isSm ? 300 : isMd ? 200 : isLg ? 300 : 400,
              },
              {
                field: "longitude",
                headerName: "Longitude",
                width: isXs ? 190 : isSm ? 300 : isMd ? 200 : isLg ? 300 : 340,
              },
            ]}
            data={mockDetalhesProjeto}
            isDetalhesTable
          />
        </Grid>
      </Grid>
    </FormProvider>
  );
}
