import { useState } from "react";
import { GameContext } from "./GameContext/GameContext";
import { GenerateWordandHint } from "./Utils/GenerateWordandHint";
import Main from "./Components/Main";
function App() {
  const wordsArr = GenerateWordandHint();
  const [word, hint] = wordsArr;
  const [incorrect, setIncorrect] = useState(0);
  const [selectedWord, setselectedWord] = useState(word);
  const [selectedHint, setselectedHint] = useState(hint);
  const [isWin, setIsWin] = useState(false);
  const [letterStore, setLetterStore] = useState<[number[], string]>([[], ""]);
  const [chosenWord, setChosenWord] = useState<string[]>([]);
  const [correctChosen, setchosenCorrect] = useState<string[]>([]);
  const [isLose, setIsLose] = useState(false);
  return (
    <>
      <GameContext.Provider
        value={{
          incorrect: incorrect,
          setIncorrect: setIncorrect,
          selectedWord: selectedWord,
          setselectedWord: setselectedWord,
          selectedHint: selectedHint,
          setselectedHint: setselectedHint,
          isWin: isWin,
          setIsWin: setIsWin,
          letterStore: letterStore,
          setletterStore: setLetterStore,
          chosenWord: chosenWord,
          setChosenWord: setChosenWord,
          correctChosen: correctChosen,
          setchosenCorrect: setchosenCorrect,
          isLose: isLose,
          setIsLose: setIsLose,
        }}
      >
        <Main />
      </GameContext.Provider>
    </>
  );
}

export default App;
