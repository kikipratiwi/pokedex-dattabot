import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

const AtomLoading = () => {
  return (
    <Stack maxWidth={"700px"} paddingY={2}>
      <Grid container spacing={2} columns={24}>
        <Grid item xs={24} sm={24} md={12} lg={12}>
          <Skeleton variant="rounded" width={"100%"} height={70} />
        </Grid>

        <Grid item xs={24} sm={24} md={12} lg={12}>
          <Skeleton variant="rounded" width={"100%"} height={70} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AtomLoading;
