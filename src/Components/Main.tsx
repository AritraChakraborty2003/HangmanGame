/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import HangmanImage from "./HangmanImage";
import TextArea from "./TextArea";
import Hint from "./Hint";
import ChanceArea from "./ChanceArea";
import Keyboard from "./Keyboard";
import { useContext } from "react";
import { GameContext } from "../GameContext/GameContext";
import { countUnique } from "../Utils/countUnique";

const Main = () => {
  const {
    selectedWord,
    correctChosen,
    isWin,
    setIsWin,
    incorrect,
    isLose,
    setIsLose,
  } = useContext(GameContext);

  const isGameOver = () => {
    const len: number = countUnique(selectedWord);
    if (correctChosen.length === len) {
      setIsWin(true);
      console.log("Win");
    } else if (incorrect === 6) {
      setIsLose(true);
      console.log("Lose");
    }
  };

  useEffect(() => {
    isGameOver();
  }, [correctChosen, incorrect, selectedWord]);
  return (
    <>
      {(isWin || isLose) && (
        <div className="MainArea bg-[#FFB22C] w-[100vw] h-[100vh] flex justify-center items-center absolute">
          <div className="playArea w-[92%] absolute flex h-[98%] lg:h-[94%] bg-white rounded-xl">
            <div className="absolute left  w-[100%] lg:w-[50%]  h-[45%] lg:h-[100%]">
              <HangmanImage />
            </div>
            {(screen.width <= 350 && (
              <div className="right relative top-[47%] lg:left-[50%] lg:top-[0%]  w-[100%] lg:w-[50%]  h-[53%] lg:h-[100%] border-t-[0.5px]">
                <TextArea />
                <Hint />
                <ChanceArea />
                <Keyboard />
              </div>
            )) || (
              <div className="right relative top-[47%] lg:left-[50%] lg:top-[0%]  w-[100%] lg:w-[50%]  h-[53%] lg:h-[100%] border-t-[0.5px] border-l-[0.5px] overflow-y-hidden">
                <TextArea />
                <Hint />
                <ChanceArea />
                <Keyboard />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
