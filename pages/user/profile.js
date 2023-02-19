import React from "react";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";

import Layout from "components/layouts";

import useAuthStore from "stores/useAuthStore";

const Profile = () => {
  const { firstName, lastName, gender, email, phone, username, image } =
    useAuthStore((state) => state.userLogin);

  const fullName = `${firstName} ${lastName}`;

  return (
    <Layout url="/user/profile">
      <Box
        width="100%"
        height="75%"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            px: 5,
            pt: 10,
            pb: 4,
            position: "relative",
            minWidth: 400,
            mx: 3,
          }}
        >
          <Avatar
            alt={fullName}
            src={image}
            sx={{
              width: 150,
              height: 150,
              background: "#fff",
              boxShadow: 2,
              position: "absolute",
              top: "-42%",
              left: "50%",
              transform: "translate(-50%, 20%)",
            }}
          />
          <Stack alignItems="center" justifyContent="center">
            <Typography align="center" variant="h4" fontWeight={600}>
              {fullName}
            </Typography>

            <Typography align="center" variant="h6" color="text.secondary">
              @{username}
            </Typography>

            <Stack direction="row" spacing={1} mt={1}>
              <Typography align="center" variant="body1">
                Email
              </Typography>
              <Typography align="center" variant="body1" color="text.secondary">
                {email}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Typography align="center" variant="body1">
                Phone
              </Typography>
              <Typography align="center" variant="body1" color="text.secondary">
                {phone}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Typography align="center" variant="body1">
                Gender
              </Typography>
              <Typography align="center" variant="body1" color="text.secondary">
                {gender}
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Profile;
