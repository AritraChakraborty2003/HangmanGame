import { useContext } from "react";
import { GameContext } from "../GameContext/GameContext";

import { Search } from "../Utils/SearchWord";
// import { document } from "postcss";

interface KeyProps {
  data: string[];
}
const Key = (props: KeyProps) => {
  const { data } = props;
  // const { incorrect, setIncorrect } = useContext(GameContext);
  const {
    selectedWord,
    setletterStore,
    incorrect,
    setIncorrect,
    chosenWord,
    setChosenWord,
    correctChosen,
    setchosenCorrect,
  } = useContext(GameContext);
  const handleClick = (letter: string) => {
    const indexArr = Search(selectedWord, letter);
    if (chosenWord.indexOf(letter) != -1) {
      alert("Already chosen!");
      return;
    }
    if (indexArr.length > 0) {
      const letterArr: [number[], string] = [indexArr, letter];
      setletterStore(letterArr);
      setChosenWord([...chosenWord, letter]);
      setchosenCorrect([...correctChosen, letter]);

      const divElement = document.getElementById(letter);
      const txtElement = document.getElementById(letter + 1);
      if (divElement && txtElement) {
        divElement.style.backgroundColor = " #cfb5a0";
        txtElement.style.color = "	#fff";
      }

      console.log(letterArr);
    } else {
      setChosenWord(chosenWord);
      setChosenWord([...chosenWord, letter]);
      setIncorrect(incorrect + 1);
      const txtElement = document.getElementById(letter + 1);
      const divElement = document.getElementById(letter);
      if (divElement && txtElement) {
        divElement.style.backgroundColor = " #cfb5a0";
        txtElement.style.color = "	#fff";
      }
    }
  };
  return (
    <>
      {data.map((item: string, index: number) => (
        <div
          id={item}
          key={index}
          className="key w-[7vmin] h-[7vmin] bg-[#FFB22C] flex justify-center items-center"
        >
          <p
            id={item + 1}
            className="text-white font-bold text-[2.45vmin]"
            onClick={() => handleClick(item)}
          >
            {item}
          </p>
        </div>
      ))}
    </>
  );
};

export default Key;
