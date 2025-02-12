import { useContext } from "react";
import { GameContext } from "../GameContext/GameContext";

const ChanceArea = () => {
  const { incorrect } = useContext(GameContext);
  return (
    <>
      <div className="w-[100%] h-[10%] flex justify-center items-center">
        <p className="font-poppins font-bold text-[3.75vmin] md:text-[2.35vmin]">
          Incorrect :&nbsp;&nbsp;
          <span className="font-bold text-[#FF0000]">{incorrect}/6</span>
        </p>
      </div>
    </>
  );
};

export default ChanceArea;
