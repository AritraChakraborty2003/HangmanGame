import { useContext } from "react";
import { GameContext } from "../GameContext/GameContext";

const TextArea = () => {
  const { selectedWord } = useContext(GameContext);
  return (
    <>
      <div className="h-[17%] lg:h-[25%] w-[100%] flex justify-center items-center">
        {selectedWord.split("").map((item: string) => {
          return (
            <span
              key={item}
              className="text-[8vmin] font-extrabold"
              style={{ padding: "1vmin" }}
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
