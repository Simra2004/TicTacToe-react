import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard/gameboard";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
  };
  const Winner = () => {
    if (
      (newBoard[0] === "X" && newBoard[1] === "X" && newBoard[2] === "X") ||
      (newBoard[3] === "X" && newBoard[4] === "X" && newBoard[5] === "X") ||
      (newBoard[6] === "X" && newBoard[7] === "X" && newBoard[8] === "X") ||
      (newBoard[0] === "X" && newBoard[3] === "X" && newBoard[6] === "X") ||
      (newBoard[1] === "X" && newBoard[4] === "X" && newBoard[7] === "X") ||
      (newBoard[2] === "X" && newBoard[5] === "X" && newBoard[8] === "X") ||
      (newBoard[0] === "X" && newBoard[4] === "X" && newBoard[8] === "X") ||
      (newBoard[2] === "X" && newBoard[4] === "X" && newBoard[6] === "X")
    ) {
      alert("X is the winner");
      setBoard(Array(9).fill(null));
      return;
    }

    if (
      (newBoard[3] === "O" && newBoard[4] === "O" && newBoard[5] === "O") ||
      (newBoard[3] === "O" && newBoard[4] === "O" && newBoard[5] === "O") ||
      (newBoard[3] === "O" && newBoard[4] === "O" && newBoard[5] === "O") ||
      (newBoard[3] === "O" && newBoard[4] === "O" && newBoard[5] === "O") ||
      (newBoard[3] === "O" && newBoard[4] === "O" && newBoard[5] === "O") ||
      (newBoard[3] === "O" && newBoard[4] === "O" && newBoard[5] === "O") ||
      (newBoard[6] === "O" && newBoard[7] === "O" && newBoard[8] === "O") ||
      (newBoard[0] === "O" && newBoard[1] === "O" && newBoard[2] === "O") ||
      (newBoard[0] === "O" && newBoard[3] === "O" && newBoard[6] === "O") ||
      (newBoard[1] === "O" && newBoard[4] === "O" && newBoard[7] === "O") ||
      (newBoard[2] === "O" && newBoard[5] === "O" && newBoard[8] === "O") ||
      (newBoard[0] === "O" && newBoard[4] === "O" && newBoard[8] === "O") ||
      (newBoard[2] === "O" && newBoard[4] === "O" && newBoard[6] === "O")
    ) {
      alert("O is the winner");
      setBoard(Array(9).fill(null));
      return;
    }

    if (!newBoard.includes(null)) {
      alert("It's a draw!");
      setBoard(Array(9).fill(null));
      return;
    }
    return (
      <>
        <Gameboard board={board} turn={turn} handleClick={handleClick} />
        <div className="btn">
          <button
            onClick={() => setBoard(Array(9).fill(null))}
            className="reset"
          >
            ↻
          </button>
        </div>
      </>
    );
  };
};
export default TicTacToe;
