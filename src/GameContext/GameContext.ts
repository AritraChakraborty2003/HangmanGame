import { createContext } from "react";

type MyType = [number[], string];

export const GameContext = createContext({
  incorrect: 6,
  selectedWord: "",
  selectedHint: "",
  isWin: false,
  isLose: false,
  chosenWord: [] as string[],
  correctChosen: [] as string[],
  letterStore: [[], ""] as MyType,
  setIncorrect: (incorrect: number) => {
    console.log(incorrect);
  },
  setChosenWord: (chosenWord: string[]) => {
    console.log(chosenWord);
  },
  setIsWin: (isWin: boolean) => {
    console.log(isWin);
  },
  setletterStore: (letterStore: [number[], string]) => {
    console.log(letterStore);
  },
  setselectedWord: (selectedWord: string) => {
    console.log(selectedWord);
  },
  setselectedHint: (selectedHint: string) => {
    console.log(selectedHint);
  },
  setchosenCorrect: (correctChosen: string[]) => {
    console.log(correctChosen);
  },
  setIsLose: (isLose: boolean) => {
    console.log(isLose);
  },
});
