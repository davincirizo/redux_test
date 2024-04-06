import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useLogin } from "./Hooks/useLogin";

export const LoginPage: React.FC<{}> = () => {
    const {
        values: {  },
        actions: { onchangeData,handleSubmitLogin },
    } = useLogin();

    return (
        <Container maxWidth="sm">
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography sx={{ mt: 1, mb: 1 }} variant="h4">Login</Typography>
                        <Box component="form" onSubmit={handleSubmitLogin}>
                            <TextField
                                name="username"
                                onChange={onchangeData}
                                fullWidth
                                label="Email"
                                required
                                sx={{ mt: 2, mb: 1.5 }} />

                            <TextField
                                name="password"
                                onChange={onchangeData}
                                type="password"
                                fullWidth
                                label="Password"
                                required
                                sx={{ mt: 1.5, mb: 1.5 }} />

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1.5, mb: 1.5 }}>
                                Login
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}