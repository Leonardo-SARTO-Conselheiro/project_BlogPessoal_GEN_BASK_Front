import { Grid, Typography, TextField, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from 'react';
import './CadastroUsuario.css';
import Usuario from '../../models/Usuario';
import { cadastroUsuario } from '../../services/Service';
import { Box } from '@mui/material';

function CadastroUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [usuario, setUsuario] = useState<Usuario>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            tipo: "",
        }
    );

    const [usuarioResultado, setUsuarioResultado] = useState<Usuario>(
        {
            id: 1,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            tipo: "",
        }
    );

    useEffect(() => {

        if (usuarioResultado.id === 0) {
            navigate('/login');
        }

    }, [usuarioResultado, navigate]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        if (confirmarSenha === usuario.senha) {
            try {
                await cadastroUsuario(`/api/Usuarios/cadastrar`, usuario, setUsuarioResultado)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert('Usuario já cadastrado, tente outro email!')
            }

        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastar</Typography>

                        <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />

                        <TextField value={usuario.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='Email' variant='outlined' name='email' margin='normal' type='email' fullWidth />

                        <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <TextField value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth />

                        <FormControl
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Tipo</InputLabel>
                            <Select
                                value={usuario.tipo}
                                native
                                label="tipo"
                                inputProps={{
                                    name: 'tipo',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value="NORMAL">Normal</option>
                                <option value="ADMINISTRADOR">Administrador</option>
                            </Select>
                        </FormControl>

                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Box marginY={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='outlined' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                            </Box>
                            <Box marginY={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario; 