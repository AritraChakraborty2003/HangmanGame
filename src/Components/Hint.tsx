import { useContext } from "react";
import { GameContext } from "../GameContext/GameContext";

const Hint = () => {
  const { incorrect } = useContext(GameContext);
  return (
    <>
      <div className="h-[20%] w-[100%] flex">
        <p
          className="text-[3.65vmin] lg:text-[2.55vmin]"
          style={{
            marginTop: "3.35vmin",
            marginLeft: "1.5vmin",
            padding: "1vmin",
          }}
        >
          <span className="font-bold"> Hint:</span> &nbsp;This country is known
          for the Eiffel Tower.You have {incorrect} chances left 😉
        </p>
      </div>
    </>
  );
};

export default Hint;
