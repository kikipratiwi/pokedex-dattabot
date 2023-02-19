import React, { useEffect, useState } from "react";
import { Chip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import Layout from "components/layouts";
import MoleculePokemonList from "components/molecules/PokemonList";

import usePokemonStore from "stores/usePokemonStore";

const Home = () => {
  const { pokemons } = usePokemonStore((state) => state);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(pokemons);
  }, [pokemons]);

  return (
    <Layout url="/">
      <div style={{ paddingBottom: "100px", width: "100%" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 2 }}
          justifyContent="center"
          alignItems={{ xs: "center", md: "start" }}
        >
          <Box width={400}>
            <TwitterTimelineEmbed sourceType="profile" screenName="Pokemon" />
          </Box>

          <div
            style={{
              width: "max-content",
              minWidth: "400px",
              maxWidth: "700px",
            }}
          >
            <Stack alignItems="center" mb={2}>
              <Chip
                label={
                  <Typography variant="h6" fontWeight={600} p={1}>
                    Your Pokémon Collection
                  </Typography>
                }
              />
            </Stack>

            <div style={{ maxWidth: "700px", paddingBottom: "100px" }}>
              <MoleculePokemonList data={data} next={false} />
            </div>
          </div>
        </Stack>
      </div>
    </Layout>
  );
};

export default Home;
