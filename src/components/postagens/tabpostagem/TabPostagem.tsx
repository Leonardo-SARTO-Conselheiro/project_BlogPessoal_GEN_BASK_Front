import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import { Box } from "@mui/system";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";

function TabPostagem() {
  const [value, setValue] = useState("1");

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs
            className="post1"
            centered
            indicatorColor="secondary"
            onChange={handleChange}
          >
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre-nós
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            Blog desenvolvido para amantes do Bask compartilharem informações e
            seus pensamentos. Seja na NBA, NBB, EuroLiga ou qualquer liga
            profissional ou até mesmo amadora. Me chamo Leonardo sou torcedor do
            BULLS e do Basquete Tricolor, acompanho a NBA aproximadamente 10
            anos e vejo o jogo evoluir diariamente, seja nas quadras americanas,
            ginasios brasileiros ou até mesmo em quadras periféricas. SOU UM
            APAIXONADO POR BASKET
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
