/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import HangmanImage from "./HangmanImage";
import TextArea from "./TextArea";
import Hint from "./Hint";
import ChanceArea from "./ChanceArea";
import Keyboard from "./Keyboard";
import { useContext } from "react";
import { GameContext } from "../GameContext/GameContext";
import { countUnique } from "../Utils/countUnique";

import Modal from "react-modal";
Modal.setAppElement("#root"); // Recommended for accessibility

const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = (): void => setIsOpen(false);

  interface ModalStyles {
    overlay: {
      backgroundColor: string;
    };
    content: {
      background: string;
      borderRadius: string;
      padding: string;
      maxWidth: string;
      maxHeight: string;
      margin: string;
    };
  }

  let modalStyles: ModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark overlay
    },
    content: {
      background: "white",
      borderRadius: "10px",
      padding: "10px",
      maxWidth: "400px",
      maxHeight: "350px",
      margin: "auto",
    },
  };
  if (screen.width >= 1920) {
    modalStyles = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark overlay
      },
      content: {
        background: "white",
        borderRadius: "10px",
        padding: "10px",
        maxWidth: "600px",
        maxHeight: "450px",
        margin: "auto",
      },
    };
  } else if (screen.width > 1000 && screen.width < 1920) {
    modalStyles = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark overlay
      },
      content: {
        background: "white",
        borderRadius: "10px",
        padding: "10px",
        maxWidth: "400px",
        maxHeight: "346px",
        margin: "auto",
      },
    };
  } else {
    modalStyles = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark overlay
      },
      content: {
        background: "white",
        borderRadius: "10px",
        padding: "10px",
        maxWidth: "400px",
        maxHeight: "285px",
        margin: "auto",
      },
    };
  }
  const {
    selectedWord,
    correctChosen,
    isWin,
    setIsWin,
    incorrect,
    setIsLose,

    setIsGameOver,
  } = useContext(GameContext);

  const isGameOverCheck = () => {
    const len: number = countUnique(selectedWord);
    if (correctChosen.length === len) {
      setIsWin(true);
      setIsGameOver(true);
      setIsOpen(true);
    } else if (incorrect === 6) {
      setIsLose(true);
      setIsGameOver(true);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    isGameOverCheck();
  }, [correctChosen, incorrect, selectedWord]);
  return (
    <>
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
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyles}
        shouldCloseOnOverlayClick={false}
      >
        <div
          className="flex flex-col justify-center items-center"
          style={{ background: "white" }}
        >
          <img
            src={isWin ? "happy.png" : "lose.png"}
            height={isWin ? 180 : 120}
            width={isWin ? 180 : 120}
            style={{ textAlign: "center", marginTop: "4vmin" }}
          />
          <p
            className=""
            style={{
              marginTop: "5.6vmin",
              color: "rgba(0, 0, 0, 0.75)",
              fontSize: "3.25vmin",
              fontFamily: "poppins",
            }}
          >
            {isWin ? "Hurray!!! You Won " : "Oops! You Lose "}
          </p>
          <button
            onClick={() => location.reload()}
            className="2xl:text-[2.45vmin]"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              color: "white",
              padding: "1.15vmin",
              marginTop: "4vmin",
            }}
          >
            Replay
          </button>
        </div>
      </Modal>
      ;
    </>
  );
};

export default Main;
