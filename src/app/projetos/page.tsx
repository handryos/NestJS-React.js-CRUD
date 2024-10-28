"use client";

import React, { useEffect, useState } from "react";
import { Grid, IconButton, Stack, Theme, useMediaQuery } from "@mui/material";
import Iconify from "@/app/components/Iconify/Iconify";

export default function Home() {
  const [activeButton, setActiveButton] = useState<string | null>("projetos");
  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };
  function capitalizeWords(str: string): string {
    const exceptions = ["de", "da", "do", "das", "dos"];
    return str
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
        if (exceptions.includes(word) && index !== 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

  const [postes, setPostes] = useState<any[]>([]);
  const [posteSelecionado, setPosetSelecionado] = useState();

  const [codigoProjeto, setCodigoProjeto] = useState<number>(0);

  const [slots, setSlots] = useState<any[]>([]);
  const [codigoPoste, setCodigoPoste] = useState<number>(0);

  const [projetoObj, setProjetoObj] = useState();

  return (
    <>
      <Grid
        display={"flex"}
        alignItems={"center"}
        alignContent={"center"}
        alignSelf={"center"}
        justifyContent={"center"}
        container
        p={{ xs: 12, xl: 2, lg: 6 }}
        xs={12}
      >
        <Grid
          borderRadius={0}
          item
          p={2}
          xs={12}
          id="header"
          xl={10}
          md={12}
          sm={12}
          container
          alignItems={"center"}
          alignContent={"center"}
          alignSelf={"center"}
          justifyContent={"center"}
          position={isXs ? "fixed" : undefined}
          top={0}
          zIndex={1000}
          height={isXs ? "22dvh" : undefined}
          bgcolor="white"
          mt={isXs ? "56px" : 0}
        >
          <Stack
            width="100%"
            alignContent={"center"}
            alignItems={"center"}
            spacing={{ xs: 1, xl: 32, lg: 28, sm: 8, md: 20 }}
            direction={!isXs ? "row" : "column"}
            border={"1px solid black"}
            justifyContent={"center"}
            borderRight={"none"}
            borderLeft={"none"}
            borderTop={"none"}
            pb={1}
            pt={1}
          >
            <div style={{ color: "white" }}>
              <IconButton
                sx={{
                  color: activeButton === "projetos" ? "white" : "black",
                  fontSize: 18,
                  borderRadius: 1,
                  alignItems: "center",
                  bgcolor: activeButton === "projetos" ? "#274375" : "white",
                  transform:
                    activeButton === "projetos" ? "scale(1.02)" : "none",
                  transition: "transform 0.2s ease-in-out",
                  ":hover": {
                    bgcolor: "#274375",
                    color: "white",
                    borderRadius: 1,
                    transform: "scale(1.02)",
                    transition: "transform 0.2s ease-in-out",
                  },
                  ":active": {
                    borderRadius: 1,
                  },
                  ":focus": {
                    borderRadius: 1,
                  },
                }}
                onClick={() => handleButtonClick("projetos")}
              >
                <Iconify
                  width={24}
                  height={24}
                  mr={1}
                  sx={{
                    color: "inherit",
                  }}
                  color={activeButton === "projetos" ? "white" : "black"}
                  icon={"material-symbols:data-table"}
                />
                {capitalizeWords("lista de projetos")}
              </IconButton>
            </div>
            <div>
              <IconButton
                sx={{
                  color: activeButton === "detalhesProjeto" ? "white" : "black",
                  fontSize: 18,
                  borderRadius: 1,

                  alignItems: "center",
                  bgcolor:
                    activeButton === "detalhesProjeto" ? "#274375" : "white",
                  transform:
                    activeButton === "detalhesProjeto" ? "scale(1.02)" : "none",
                  transition: "transform 0.2s ease-in-out",
                  ":hover": {
                    bgcolor: "#274375",
                    color: "white",
                    borderRadius: 1,
                    transform: "scale(1.02)",
                    transition: "transform 0.2s ease-in-out",
                  },
                  ":active": {
                    borderRadius: 1,
                  },
                  ":focus": {
                    borderRadius: 1,
                  },
                }}
                onClick={() => handleButtonClick("detalhesProjeto")}
              >
                <Iconify
                  width={24}
                  height={24}
                  mr={1}
                  sx={{
                    color: "inherit",
                  }}
                  color={activeButton === "detalhesProjeto" ? "white" : "black"}
                  icon={"material-symbols:assignment"}
                />
                {capitalizeWords("detalhes do projeto")}
              </IconButton>
            </div>
            <div>
              <IconButton
                sx={{
                  color: activeButton === "detalhesPoste" ? "white" : "black",
                  fontSize: 18,
                  borderRadius: 1,

                  alignItems: "center",
                  bgcolor:
                    activeButton === "detalhesPoste" ? "#274375" : "white",
                  transform:
                    activeButton === "detalhesPoste" ? "scale(1.02)" : "none",
                  transition: "transform 0.2s ease-in-out",
                  ":hover": {
                    bgcolor: "#274375",
                    color: "white",
                    borderRadius: 1,
                    transform: "scale(1.02)",
                    transition: "transform 0.2s ease-in-out",
                  },
                  ":active": {
                    borderRadius: 1,
                  },
                  ":focus": {
                    borderRadius: 1,
                  },
                }}
                onClick={() => handleButtonClick("detalhesPoste")}
              >
                <Iconify
                  width={24}
                  height={24}
                  mr={1}
                  sx={{
                    color: "inherit",
                  }}
                  color={activeButton === "detalhesPoste" ? "white" : "black"}
                  icon={"material-symbols:account-tree-rounded"}
                />
                {capitalizeWords("detalhes do poste")}
              </IconButton>
            </div>
          </Stack>
        </Grid>
        {/* <ListaProjetos
          checkFunction={(data) => {
            setCodigoProjeto(data?.row?.codigoProjeto);
            setProjetoObj(data?.row);
          }}
          display={activeButton === "projetos"}
        />
        <DetalhesProjeto
          postes={postes}
          projeto={projetoObj}
          codigoProjeto={codigoProjeto}
          checkFunction={(data) => {
            setCodigoPoste(data?.row?.codigoPoste);
            setPosetSelecionado(data?.row);
          }}
          display={activeButton === "detalhesProjeto"}
        />
        <DetalhesPoste
          slots={slots}
          poste={posteSelecionado}
          display={activeButton === "detalhesPoste"}
        /> */}
      </Grid>
    </>
  );
}
