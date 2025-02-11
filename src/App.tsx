import Main from "./Components/Main";
import { useState } from "react";
import { GameContext } from "./GameContext/GameContext";
function App() {
  const [incorrect, setIncorrect] = useState(6);
  return (
    <>
      <GameContext.Provider
        value={{ incorrect: incorrect, setIncorrect: setIncorrect }}
      >
        <Main />
      </GameContext.Provider>
    </>
  );
}

export default App;
