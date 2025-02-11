import HangmanImage from "./HangmanImage";
import TextArea from "./TextArea";
import Hint from "./Hint";
import ChanceArea from "./ChanceArea";
import Keyboard from "./Keyboard";
const Main = () => {
  return (
    <>
      <div className="MainArea bg-[#FFB22C] w-[100vw] h-[100vh] flex justify-center items-center absolute">
        <div className="playArea w-[92%] absolute flex h-[98%] lg:h-[94%] bg-white rounded-xl">
          <div className="absolute left  w-[100%] lg:w-[50%]  h-[45%] lg:h-[100%]">
            <HangmanImage />
          </div>
          {(screen.width <= 350 && (
            <div className="right relative top-[47%] lg:left-[50%] lg:top-[0%]  w-[100%] lg:w-[50%]  h-[53%] lg:h-[100%] border-t-[1px]">
              <TextArea />
              <Hint />
              <ChanceArea />
              <Keyboard />
            </div>
          )) || (
            <div className="right relative top-[47%] lg:left-[50%] lg:top-[0%]  w-[100%] lg:w-[50%]  h-[53%] lg:h-[100%] border-t-[1px] border-l-[1px] overflow-y-hidden">
              <TextArea />
              <Hint />
              <ChanceArea />
              <Keyboard />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
