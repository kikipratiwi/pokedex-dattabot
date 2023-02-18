import React, { useState } from "react";
import { Typography, Grid, Stack, Modal } from "@mui/material";
import { grey } from "@mui/material/colors";
import InfiniteScroll from "react-infinite-scroll-component";

import AtomLoading from "components/atoms/Loading";
import MoleculePokemonDetail from "components/molecules/DetailPokemon";
import { Box } from "@mui/system";

const MoleculePokemonList = ({
  data,
  next,
  setPage = () => {},
  endMessage,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const openModal = (name) => {
    setIsOpenModal(true);
    setSelectedPokemon(name);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedPokemon("");
  };

  return (
    <>
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
            {endMessage}
          </Typography>
        }
      >
        <Grid container spacing={2} columns={24}>
          {data.length > 0 &&
            data.map((item, index) => {
              const name = item?.name ? item?.name : item;

              return (
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
              );
            })}
        </Grid>
      </InfiniteScroll>

      <Modal
        open={isOpenModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <MoleculePokemonDetail
            cardStyle={{
              borderRadius: 2,
              border: `1px solid ${grey[200]}`,
              boxShadow: 5,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: { xs: "80%", sm: "50%", md: "50%", lg: "40%" },
            }}
            pokemonIdentifier={selectedPokemon}
          />
        </Box>
      </Modal>
    </>
  );
};

export default MoleculePokemonList;
