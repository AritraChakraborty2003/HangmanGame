import { createContext } from "react";

export const GameContext = createContext({
  guesses: 6,
  setGuesses: (guesses: number) => {
    console.log(guesses);
  },
});
