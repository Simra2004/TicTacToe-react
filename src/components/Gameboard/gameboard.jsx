import React from "react"

const Gameboard=()=>{
    return(
            <div className="container">
              <div className="turn">{turn} Turn</div>
              <div className="board">
                {board.map((cell, index) => (
                  <div key={index} className="cell" onClick={() => handleClick(index)}>
                    {cell}
                  </div>
                ))}
              </div>
            </div>
          );
        };
        export default Gameboard;