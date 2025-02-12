/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { GameContext } from "../GameContext/GameContext";
const HangmanImage = () => {
  const [count, setCount] = useState(0);
  const { incorrect, setIncorrect } = useContext(GameContext);

  const addComponent = () => {
    if (incorrect != 0) {
      const elements: string[] = [
        `<div class="container" id="head" style="height:10vmin; width:10vmin; border:1px solid black; border-radius:5vmin; position:relative; top:0%"></div>`,
        `<div class="container" id="body" style="height:17vmin; width:1px; background-color:black; position:relative; top:0%; left:48%;"></div>`,
        `<div class="container" id="larm" style="height:17vmin; width:1px; background-color:black; position:relative;  margin-top:-18.5vmin; margin-left:0.15vmin; rotate:35deg;"></div>`,
        `<div class="container" id="larm" style="height:17vmin; width:1px; background-color:black; position:relative;  margin-top:-16.95vmin; margin-left:10.15vmin; rotate:-35deg;"></div>`,
        `<div class="container" id="lleg" style="height:17vmin; width:1px; background-color:black; position:relative;  margin-top:-0.45vmin; margin-left:0.15vmin; rotate:35deg;"></div>`,
        `<div class="container" id="rleg" style="height:17vmin; width:1px; background-color:black; position:relative;  margin-top:-17vmin; margin-left:9.75vmin; rotate:-35deg;"></div>`,
      ];
      const hangLine = document.getElementById("hangLine");
      console.log(count);
      if (hangLine && count < elements.length) {
        hangLine.innerHTML += elements[count];
        setCount(count + 1);
      }
    }
  };

  useEffect(() => {
    addComponent();
  }, [incorrect, setIncorrect]);

  return (
    <>
      <div className="hangmanHolder pb-3 w-[100%] h-[100%] flex flex-col justify-center items-center overflow-y-hidden">
        <div className="HagmanHolder w-[70%] h-[80%] border-l-[3px] border-t-[3px] absolute overflow-y-hidden">
          <div
            className="hline w-[3px] h-[8vmin] bg-black"
            style={{
              transform: "rotate(34deg)",
              marginLeft: "2vmin",
              marginTop: "-0.55vmin",
            }}
          ></div>

          <div
            className="hangLine flex flex-col"
            id="hangLine"
            style={{
              marginLeft: "75%",
              marginTop: "-7.5vmin",
              position: "absolute",
              height: "60vmin",
            }}
          >
            <div
              className="vline w-[2px] h-[5vmin] bg-black"
              style={{ marginLeft: "5vmin" }}
              id="hangrope"
            ></div>
          </div>
        </div>
        <div
          className="hline w-[70%] h-[3px] bg-black"
          style={{ marginRight: "7vmin", position: "relative", top: "42%" }}
        ></div>
        <div
          className="textHolder text-[3vmin]"
          style={{ position: "relative", top: "45%" }}
        >
          <p
            className="font-poppins font-extrabold"
            style={{ letterSpacing: "0.15vmin" }}
          >
            Hangman Game
          </p>
        </div>
      </div>
    </>
  );
};

export default HangmanImage;
