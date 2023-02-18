import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePokemonStore = create(
  persist(
    (set) => ({
      pokemons: [],
      addPokemon: (newPokemon) =>
        set((state) => ({ pokemons: [...state.pokemons, newPokemon] })),
    }),
    { name: "pokemon-storage" },
  ),
);

export default usePokemonStore;
