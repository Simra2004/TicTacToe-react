import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Sqr from "./components/Square/sqr";
import Gameboard from "./components/Gameboard/gameboard";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  <Sqr value={setTurn} handleClick= {handleClick}/>;
  <Gameboard value={turn} box={container} board={board} />
  return (
      <div className="btn">
      <button onClick={() => setBoard(Array(9).fill(null))} className="reset">
        ↻
      </button>
      </div>
  );
};

export default TicTacToe;
