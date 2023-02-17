import React, { useState } from "react";
import { Typography, Grid, Stack, Modal } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import AtomLoading from "components/atoms/Loading";
import AtomPokemonDetail from "components/atoms/DetailPokemon";
import Layout from "components/components/layouts";

import usePagination from "hooks/usePagination";

const Library = () => {
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
    <Layout url="/pokemon/library">
      <Stack alignItems="center">
        <InfiniteScroll
          loader={<AtomLoading />}
          dataLength={data.length}
          hasMore={!!next}
          next={() => {
            setTimeout(() => {
              setPage((prev) => prev + 1);
            }, 500);
          }}
          endMessage={
            <Typography variant="h6" align="center">
              Yay! You have seen it all
            </Typography>
          }
        >
          <Grid container spacing={2} columns={24} maxWidth={700}>
            {data.map(({ name }, index) => (
              <Grid item key={index} xs={24} sm={24} md={12} lg={12}>
                <Stack
                  alignItems="center"
                  borderRadius={2}
                  boxShadow={2}
                  direction="row"
                  justifyContent="center"
                  minHeight={100}
                  sx={{
                    backgroundColor: "#fff",
                    transition: "background .3s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#ffe68d",
                    },
                  }}
                  onClick={() => openModal(name)}
                >
                  <Typography variant="h6">{name}</Typography>
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
    </Layout>
  );
};

export default Library;
