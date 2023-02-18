import React from "react";

import Layout from "components/layouts";

import usePagination from "hooks/usePagination";
import MoleculePokemonList from "components/molecules/PokemonList";

const Library = () => {
  const { data, next, setPage } = usePagination(
    "https://pokeapi.co/api/v2/pokemon",
  );

  return (
    <Layout url="/pokemon/library">
      <div style={{ maxWidth: 700, paddingBottom: "100px" }}>
        <MoleculePokemonList
          data={data}
          next={next}
          setPage={setPage}
          endMessage="Yay! You have seen it all"
        />
      </div>
    </Layout>
  );
};

export default Library;
