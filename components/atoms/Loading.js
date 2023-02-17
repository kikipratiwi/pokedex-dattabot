import React from "react";
import { Grid, Skeleton } from "@mui/material";

const AtomLoading = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2}
      columns={24}
      maxWidth={700}
      paddingY={2}
    >
      <Grid item xs={24} sm={24} md={12} lg={12}>
        <Skeleton variant="rounded" width={"100%"} height={60} />
      </Grid>

      <Grid item xs={24} sm={24} md={12} lg={12}>
        <Skeleton variant="rounded" width={"100%"} height={60} />
      </Grid>
    </Grid>
  );
};

export default AtomLoading;
