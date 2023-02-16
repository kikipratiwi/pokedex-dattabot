import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import axios from "axios";
import AtomLoading from "components/components/atoms/Loading";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  borderRadius: 2,
  border: `1px solid ${grey[200]}`,
  boxShadow: 5,
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
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (name) fetchData();
  }, [name]);

  return (
    <Card sx={{ ...style }}>
      {isLoading ? (
        <AtomLoading />
      ) : (
        <>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{
                filter: "blur(13px)",
                position: "relative",
              }}
              component="img"
              height="150"
              image={
                pokemonDetail.sprites.other["official-artwork"].front_default
              }
              alt="green iguana"
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
                alt={
                  pokemonDetail.sprites.other["official-artwork"].front_default
                }
                width={150}
                height={150}
              />
            </div>
          </div>

          <CardContent sx={{ mt: 4 }}>
            <Typography gutterBottom variant="h5" component="div">
              {pokemonDetail.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              Abilities
            </Typography>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              {pokemonDetail.abilities.map(
                ({ ability: { name, is_hidden, slot } }, index) => {
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
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default AtomPokemonDetail;
