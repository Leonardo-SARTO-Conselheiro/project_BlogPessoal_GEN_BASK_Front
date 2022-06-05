import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button, Container } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField
                            id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth/>

                        <TextField
                            id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>
            </Grid>
        </Grid>
    )
}

export default Login;