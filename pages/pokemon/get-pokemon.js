import React, { useState } from "react";
import { Button, Card, Modal, Snackbar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Layout from "components/layouts";
import MoleculePokemonDetail from "components/molecules/DetailPokemon";

import getRandomNumber from "utils/getRandomNumber";
import usePokemonStore from "stores/usePokemonStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: { xs: "80%", sm: "50%", md: "50%", lg: "40%" },
  bgcolor: "white",
  border: 0,
  boxShadow: "none",
};

const GetPokemon = () => {
  const TOTAL_POKEMON = 1279;
  const { pokemons, addPokemon } = usePokemonStore((state) => state);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const getPokemon = () => {
    setIsLoading(true);

    let randomPokemonId;
    do {
      randomPokemonId = getRandomNumber(1, TOTAL_POKEMON);
    } while (pokemons.includes(randomPokemonId));

    setSelectedPokemon(randomPokemonId);

    setTimeout(() => {
      setIsOpenModal(true);
    }, 3000);
  };

  const addPokemonToStorage = () => {
    addPokemon(pokemonName);
    setOpenSnackbar(true);
    closeModal();
  };

  const closeModal = () => {
    setIsLoading(false);
    setIsOpenModal(false);
    setSelectedPokemon("");
    setPokemonName("");
  };

  return (
    <Layout url="/pokemon/get-pokemon">
      <Box
        width="100%"
        height="60%"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Stack alignItems="center" justifyContent="center" spacing={1}>
          <Typography variant="h4">Get Your Pokémon</Typography>

          <Button variant="contained" onClick={getPokemon} disabled={isLoading}>
            {isLoading ? "Getting your pokémon.." : "Get Pokémon!"}
          </Button>
        </Stack>

        <Modal
          open={isOpenModal}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card
            sx={{
              ...style,
            }}
          >
            <MoleculePokemonDetail
              setError={setError}
              error={error}
              pokemonIdentifier={selectedPokemon}
              setPokemonName={setPokemonName}
            />

            {pokemonName && (
              <Stack
                direction="row"
                alignItems="end"
                justifyContent="end"
                spacing={1}
                px={2}
                pb={2}
              >
                <Button
                  size="small"
                  onClick={closeModal}
                  variant={error ? "contained" : "text"}
                >
                  {error ? "Try again" : "Dismiss"}
                </Button>
                {!error && (
                  <Button
                    size="small"
                    variant="contained"
                    onClick={addPokemonToStorage}
                    endIcon={<FavoriteIcon />}
                  >
                    Add to collection
                  </Button>
                )}
              </Stack>
            )}
          </Card>
        </Modal>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        message="Pokémon has been added to your collection!"
      />
    </Layout>
  );
};

export default GetPokemon;
