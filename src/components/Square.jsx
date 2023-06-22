import { useState } from "react";
import { xSvg, oSvg } from "../public/svg";

export default function Square({ isX, gridSpot, handleSquare }) {
  const [letter, setLetter] = useState("");
  let value;

  isX ? (value = xSvg) : (value = oSvg);

  return (
    <section
      className="letter-box"
      onClick={() => {
        if (letter !== "") return;

        setLetter(value);
        handleSquare(gridSpot);
      }}
    >
      {letter}
    </section>
  );
}
