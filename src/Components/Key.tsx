import { useContext } from "react";
import { GameContext } from "../GameContext/GameContext";

interface KeyProps {
  data: string[];
}
const Key = (props: KeyProps) => {
  const { data } = props;
  const { incorrect, setIncorrect } = useContext(GameContext);
  const changeIncorrect = () => {
    setIncorrect(incorrect - 1);
  };
  return (
    <>
      {data.map((item: string) => (
        <div
          key={item}
          className="key w-[7vmin] h-[7vmin] bg-[#FFB22C] flex justify-center items-center"
        >
          <p
            className="text-white font-bold text-[2.45vmin]"
            onClick={changeIncorrect}
          >
            {item}
          </p>
        </div>
      ))}
    </>
  );
};

export default Key;
