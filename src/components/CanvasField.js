import { red } from "@mui/material/colors";
import React, { useContext, useRef, useEffect, useMemo } from "react";
import LivePainterContext from "../contex/LivePainterContext";
const CanvasField = (props) => {
  const context = useContext(LivePainterContext);

  const canvas = useRef(null);
  // const [lineArray, setLineArray] = useState([]);

  let lineArray = useMemo(() => {
    return [];
  }, []);

  useEffect(() => {
    createCanvas(context, canvas);
  }, []);

  useEffect(() => {
    if (context.state.clear) {
      createCanvas(context, canvas);
      context.dispatch({ type: "SET_CLEAR", payload: { clear: false } });
      lineArray = [];
    }
  }, [context.state.clear]);

  useEffect(() => {
    createCanvas(context, canvas);
    reDraw();
  }, [context.state.background]);

  useEffect(() => {}, [context.state.isErase]);

  let isMouseDown = false;

  useEffect(() => {}, [lineArray]);

  const createCanvas = (context, canvas) => {
    let canvasContext = canvas.current.getContext("2d");
    canvasContext.fillStyle = context.state.background;
    canvasContext.fillRect(0, 0, canvas.current.width, canvas.current.height);
  };

  const getMousePosition = (canvas, event) => {
    let rect = canvas.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  // On mouse down
  const mouseDown = (context, canvas, event) => {
    let canvasContext = canvas.current.getContext("2d");
    let currentPosition = getMousePosition(canvas, event);
    canvasContext.moveTo(currentPosition.x, currentPosition.y);
    canvasContext.beginPath();
    canvasContext.lineWidth = context.state.size;
    canvasContext.lineCap = "round";
    canvasContext.strokeStyle = context.state.color;
    isMouseDown = true;
  };

  // On mouse down
  const mouseMove = (context, canvas, event) => {
    if (isMouseDown) {
      let canvasContext = canvas.current.getContext("2d");
      let currentPosition = getMousePosition(canvas, event);
      store(currentPosition.x, currentPosition.y);
      canvasContext.lineTo(currentPosition.x, currentPosition.y);
      canvasContext.stroke();
    }
  };

  const mouseUp = () => {
    isMouseDown = false;
    store();
  };

  const store = (x, y) => {
    let line = {
      x,
      y,
      size: context.state.size,
      color: context.state.color,
    };
    lineArray.push(line);
  };

  const reDraw = () => {
    let canvasContext = canvas.current.getContext("2d");
    for (var i = 1; i < lineArray.length; i++) {
      canvasContext.beginPath();
      canvasContext.moveTo(lineArray[i - 1].x, lineArray[i - 1].y);
      canvasContext.lineWidth = lineArray[i].size;
      canvasContext.lineCap = "round";
      canvasContext.strokeStyle = lineArray[i].color;
      canvasContext.lineTo(lineArray[i].x, lineArray[i].y);
      canvasContext.stroke();
    }
  };

  return (
    <canvas
      ref={canvas}
      width={context.state.field.width}
      height={context.state.field.height}
      style={{
        border: "1px solid black",
        background: context.state.background,
      }}
      onMouseDown={(e) => mouseDown(context, canvas, e)}
      onMouseMove={(e) => mouseMove(context, canvas, e)}
      onMouseUp={(e) => mouseUp()}
    ></canvas>
  );
};

export default CanvasField;
