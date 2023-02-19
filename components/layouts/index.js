import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import HomeIcon from "@mui/icons-material/Home";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Image from "next/image";

export default function Layout({ url, children }) {
  const route = useRouter();
  const [value, setValue] = useState(url);

  const navigateMenu = (event, newValue) => {
    setValue(newValue);

    setTimeout(() => {
      route.push(newValue);
    }, [200]);
  };

  return (
    <Stack alignItems="center" height="100vh" pt={2} px={5} spacing={2}>
      <Box>
        <div style={{ position: "relative", width: 200, height: 90 }}>
          <Image
            loader={() => "/pokemon-logo.png"}
            src={"/pokemon-logo.png"}
            alt="Pokemon Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Box>

      {children}

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            width: "100%",
            "&.MuiBottomNavigation-root": {
              bgcolor: "#000",
            },
          }}
          value={value}
          onChange={navigateMenu}
        >
          <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Library"
            value="/pokemon/library"
            icon={<FolderSpecialIcon />}
          />
          <BottomNavigationAction
            label="Get Your Pokémon"
            value="/pokemon/get-pokemon"
            icon={<AutoFixHighIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            value="/user/profile"
            icon={<InsertEmoticonIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Stack>
  );
}
