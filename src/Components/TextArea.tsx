/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { GameContext } from "../GameContext/GameContext";

const TextArea = () => {
  const { selectedWord, letterStore } = useContext(GameContext);

  useEffect(() => {
    handleChange();
  }, [letterStore]);

  const handleChange = () => {
    const [arr, letter] = letterStore;
    // console.log(arr, letter);
    arr.map((char: number) => {
      const element = document.getElementById(String(char));
      if (element) {
        element.innerText = letter;
      }
    });
  };

  return (
    <>
      <div className="h-[17%] lg:h-[25%] w-[100%] flex justify-center items-center">
        {selectedWord.split("").map((item: string, index: number) => {
          return (
            <span
              id={String(index + 1)}
              key={item + 3}
              className="text-[8vmin] font-extrabold"
              style={{ padding: "1.3vmin" }}
            >
              _&nbsp;
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TextArea;
