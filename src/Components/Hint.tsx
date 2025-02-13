import { useContext } from "react";
import { GameContext } from "../GameContext/GameContext";

const Hint = () => {
  const { incorrect, selectedHint } = useContext(GameContext);

  return (
    <>
      {/* {console.log(selectedWord)} */}
      <div className="h-[20%] w-[100%] flex">
        <p
          className="text-[3.65vmin] md:text-[2.35vmin]"
          style={{
            marginTop: "3.35vmin",
            marginLeft: "1.5vmin",
            padding: "1vmin",
          }}
        >
          <span className="font-bold ml-[3vmin] lg:ml-[0vmin]"> Hint:</span>{" "}
          &nbsp;{selectedHint}
          &nbsp;You have {6 - incorrect}/6 chances left 😉
        </p>
      </div>
    </>
  );
};

export default Hint;
