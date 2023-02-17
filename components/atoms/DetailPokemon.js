import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import axios from "axios";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  borderRadius: 2,
  border: `1px solid ${grey[200]}`,
  boxShadow: 5,
  minWidth: { xs: "80%", sm: "50%", md: "50%", lg: "40%" },
  px: 2,
};

const AtomPokemonDetail = ({ name }) => {
  const [pokemonDetail, setPokemonDetail] = useState();
  const [isLoading, setIsloading] = useState(true);

  async function fetchData() {
    setIsloading(true);

    try {
      const { data: response } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      );

      setPokemonDetail(response);
      setIsloading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (name) fetchData();
  }, [name]);

  return (
    <Card
      sx={{
        ...style,
      }}
    >
      {isLoading ? (
        <Typography sx={{ px: 10, py: 5 }}> Loading ...</Typography>
      ) : (
        <>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{
                filter: "blur(13px) opacity(.8)",
                position: "relative",
              }}
              component="img"
              height="150"
              image={
                pokemonDetail.sprites.other["official-artwork"].front_default
              }
              alt="Pokemon Background"
            />
            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
            >
              <Image
                loader={() =>
                  pokemonDetail.sprites.other["official-artwork"].front_default
                }
                src={
                  pokemonDetail.sprites.other["official-artwork"].front_default
                }
                alt="Pokemon Avatar"
                width={150}
                height={150}
              />
            </div>
          </div>

          <CardContent sx={{ mt: 3 }}>
            <Stack
              direction={{ sm: "column", md: "row" }}
              spacing={{ xs: 1, md: 2 }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4" fontWeight={700} component="div">
                {pokemonDetail.name}
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center">
                {pokemonDetail.types.map(({ type: { name } }, index) => {
                  return (
                    <Chip
                      key={index}
                      size="small"
                      label={
                        <Typography color="#fff" px={1}>
                          {name}
                        </Typography>
                      }
                      color="primary"
                    />
                  );
                })}
              </Stack>
            </Stack>

            <Stack
              direction={{ sm: "column", md: "row" }}
              spacing={{ xs: 1, md: 2 }}
              alignItems="center"
              py={2}
              divider={
                <Box
                  display={{
                    xs: "none",
                    md: "block",
                  }}
                >
                  <CircleIcon
                    color="primary"
                    sx={{
                      fontSize: 5,
                    }}
                  />
                </Box>
              }
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontWeight={600}
                >
                  Best Experience
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {pokemonDetail.base_experience}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontWeight={600}
                >
                  Weight
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {pokemonDetail.weight}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontWeight={600}
                >
                  Height
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {pokemonDetail.height}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={3} alignItems="start" mt={1}>
              <Stack spacing={2} width="55%">
                <Stack>
                  <Typography gutterBottom variant="h6">
                    Abilities
                  </Typography>

                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    {pokemonDetail.abilities.map(
                      ({ ability: { name, is_hidden } }, index) => {
                        return (
                          !is_hidden && (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              key={index}
                            >
                              {name}
                            </Typography>
                          )
                        );
                      },
                    )}
                  </Stack>
                </Stack>

                <Box>
                  <Typography gutterBottom variant="h6">
                    Stats
                  </Typography>

                  <Stack spacing={1}>
                    {pokemonDetail.stats.map(
                      ({ stat: { name }, base_stat }, index) => {
                        return (
                          <Stack
                            direction="row"
                            key={index}
                            spacing={1}
                            alignItems="center"
                          >
                            <Typography variant="body2" color="text.primary">
                              {name}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                              {base_stat}
                            </Typography>
                          </Stack>
                        );
                      },
                    )}
                  </Stack>
                </Box>
              </Stack>

              <Box pl={2}>
                <Typography gutterBottom variant="h6">
                  Moves
                </Typography>

                <Box maxHeight={240} overflow="auto">
                  {pokemonDetail.moves.map(({ move: { name } }, index) => {
                    return (
                      <Typography
                        key={index}
                        variant="body2"
                        color="text.secondary"
                      >
                        {name}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default AtomPokemonDetail;
