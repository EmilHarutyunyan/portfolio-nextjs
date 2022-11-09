import React from "react";
// import { useContext } from "react"; used later
import useMousePosition from "./useMousePosition";
// import { MouseContext } from "../../context/mouse-context"; used from step6
const Cursor = () => {
  // const { cursorType } = useContext(MouseContext); used from step6
const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={"ring"}
        // className={`ring ${cursorType}`} used from step6
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={"dot"}
        // className={`dot ${cursorType}`} used from step6
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;