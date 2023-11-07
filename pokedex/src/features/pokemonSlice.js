import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    savePokemons: (state, action) => {
      state.pokemons = [...action.payload];
    },
  },
});

export default pokemonSlice.reducer;
export const { savePokemons } = pokemonSlice.actions;
