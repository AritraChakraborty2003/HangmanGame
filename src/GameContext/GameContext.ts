import { createContext } from "react";

export const GameContext = createContext({
  incorrect: 6,
  setIncorrect: (incorrect: number) => {
    console.log(incorrect);
  },
});
