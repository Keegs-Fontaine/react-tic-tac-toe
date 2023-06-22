import { useState } from "react";
import Square from "./Square";

const letterObj = {
  xSvg: [],
  oSvg: [],
};

const WIN_CONDITIONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],

  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],

  [1, 5, 9],
  [3, 5, 7],
];

export default function Board() {
  const [isX, setIsX] = useState(true);
  const [winText, setWinText] = useState("");

  const checkWin = (letterArr, letter) => {
    WIN_CONDITIONS.forEach((winArr) => {
      let value = winArr.every((element) => {
        return letterArr.includes(element);
      });

      if (value) setWinText(`${letter} WINS!`);
    });
  };

  const handleSquare = (gridNum) => {
    if (winText !== "") return;

    setIsX(!isX);

    if (isX) {
      letterObj.xSvg.push(gridNum);
      checkWin(letterObj.xSvg, "X");
    } else {
      letterObj.oSvg.push(gridNum);
      checkWin(letterObj.oSvg, "O");
    }
  };

  return (
    <>
      <main className="board">
        {/* Please note that the code I have used below, rendering 9 individual Square components, isn't necessarily the best solution. A way to do this dynamically with a loop is as follows: 
        
        Array.from({length: 9}).map(_, index => {
          return <Square isX={isX} handleSquare={handleSquare} gridSpot={index + 1} key={index} />
        })

        Of course, this approach, while being fewer lines of code isn't necessarily a better solution, just another potential approach someone may implement
        
        */}

        <Square isX={isX} handleSquare={handleSquare} gridSpot={1} />
        <Square isX={isX} handleSquare={handleSquare} gridSpot={2} />
        <Square isX={isX} handleSquare={handleSquare} gridSpot={3} />
        <Square isX={isX} handleSquare={handleSquare} gridSpot={4} />
        <Square isX={isX} handleSquare={handleSquare} gridSpot={5} />
        <Square isX={isX} handleSquare={handleSquare} gridSpot={6} />
        <Square isX={isX} handleSquare={handleSquare} gridSpot={7} />
        <Square isX={isX} handleSquare={handleSquare} gridSpot={8} />
        <Square isX={isX} handleSquare={handleSquare} gridSpot={9} />
      </main>
      <h1>{winText}</h1>
    </>
  );
}
