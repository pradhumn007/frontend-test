import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Validation from "./loginValidation";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const [values, setValues] = React.useState({
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
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleInput}
              autoComplete="email"
              autoFocus
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleInput}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Create account
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
