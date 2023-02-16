import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { grey } from "@mui/material/colors";
import { Typography, Grid, Stack, Modal } from "@mui/material";

import AtomLoading from "components/atoms/Loading";
import AtomPokemonDetail from "components/atoms/DetailPokemon";
import usePagination from "hooks/usePagination";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const { data, next, setPage } = usePagination(
    "https://pokeapi.co/api/v2/pokemon",
  );

  const openModal = (name) => {
    setIsOpenModal(true);
    setSelectedPokemon(name);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedPokemon("");
  };

  return (
    <Stack
      alignItems="center"
      py={2}
      spacing={5}
      sx={{
        paddingX: "5px",
      }}
    >
      <Stack width="50%">
        <Stack justifyContent="center" direction="row" width="100%">
          <Typography fontSize={30} fontWeight={500} align="center">
            Pokedex ({data?.length})
          </Typography>
        </Stack>
      </Stack>

      <InfiniteScroll
        dataLength={data.length}
        hasMore={!!next}
        loader={<AtomLoading />}
        next={() => {
          console.log("kesini?");
          setPage((prev) => prev + 1);
        }}
        endMessage={
          <Typography align="center">Yay! You have seen it all</Typography>
        }
      >
        <Grid container spacing={2} columns={24} maxWidth={700}>
          {data.map(({ name }, index) => (
            <Grid item key={index} xs={24} sm={24} lg={12}>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="center"
                minHeight={100}
                borderRadius={2}
                boxShadow={2}
                border={`1px solid ${grey[200]}`}
                sx={{ cursor: "pointer" }}
                onClick={() => openModal(name)}
              >
                <Typography>{name}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>

      <Modal
        open={isOpenModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AtomPokemonDetail name={selectedPokemon} />
      </Modal>
    </Stack>
  );
}
