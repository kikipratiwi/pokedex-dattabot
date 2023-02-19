import React, { useState } from "react";
import {
  AccountCircle,
  Help,
  Lock,
  PersonPin,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";

import useAuthStore from "stores/useAuthStore";
import userData from "dummy-data/user_dummy.json";
import Image from "next/image";
import { Stack } from "@mui/system";

const Login = () => {
  const { setLogin } = useAuthStore((state) => state);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");

  const login = () => {
    const user = userData[username];

    if (user) {
      if (userData[username].password === password) {
        const userLogin = userData[username];
        delete userLogin.password;
        setLogin(true, userLogin);

        return "";
      }
    }

    setOpenSnackbar(true);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      className="login-background"
      position="relative"
    >
      <div
        style={{
          position: "absolute",
          top: "23%",
          left: "50%",
          transform: "translate(-50%, -23%)",
          zIndex: 10,
          width: 200,
          height: 90,
        }}
      >
        <Image
          loader={() => "/pokemon-logo.png"}
          src={"/pokemon-logo.png"}
          alt="Pokemon Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          width: 400,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 15,
          background: "#fff",
          borderRadius: 16,
          padding: 32,
        }}
      >
        <Stack alignItems="center">
          <PersonPin color="primary" sx={{ fontSize: "4rem" }} />
          <Tooltip title="Try username: user1, password: password1">
            <Help fontSize="small" />
          </Tooltip>
        </Stack>

        <TextField
          autoFocus
          fullWidth
          placeholder="user1"
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password1"
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button fullWidth onClick={() => login()}>
          Login
        </Button>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="error">
          Sorry, wrong username and password combination
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
