import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import Usuario from "../../models/Usuario";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [idCriador, setIdCriador] = useLocalStorage("id");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    tipo: "NORMAL",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/api/Usuarios/logar`, usuario, setToken, setIdCriador);

      toast.success("Usuário logado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistente. Erro ao logar!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#a30000" }}
      >
        <Grid alignItems="center" xs={6} style={{ backgroundColor: "#fff" }}>
          <Box paddingX={20}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="textos1"
              >
                Entrar no Fórum
              </Typography>

              <TextField
                value={usuario.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="email"
                label="email"
                variant="outlined"
                name="email"
                margin="normal"
                fullWidth
              />

              <TextField
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />

              <Box marginTop={2} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#f1a0a0" }}
                >
                  Logar
                </Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastrousuario">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="textos1"
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className="imagem"></Grid>
      </Grid>
    </>
  );
}

export default Login;
