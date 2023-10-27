import * as React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Validation from "./signUpValidation";

const defaultTheme = createTheme();

export default function SignUp() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  onChange={handleInput}
                  id="Name"
                  label="Name"
                  autoFocus
                />
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name}</span>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={handleInput}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={handleInput}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Link
              to="/"
              component="button"
              variant="body2"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
