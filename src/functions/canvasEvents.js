let isMouseDown = false;

export const createCanvas = (context, canvas) => {
  let canvasContext = canvas.current.getContext("2d");
  canvasContext.fillStyle = context.state.background;
  canvasContext.fillRect(0, 0, canvas.current.width, canvas.current.height);
};

export const getMousePosition = (canvas, event) => {
  let rect = canvas.current.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

// On mouse down
export const mouseDown = (context, canvas, event) => {
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
export const mouseMove = (context, canvas, event) => {
  if (isMouseDown) {
    let canvasContext = canvas.current.getContext("2d");
    let currentPosition = getMousePosition(canvas, event);
    canvasContext.lineTo(currentPosition.x, currentPosition.y);
    canvasContext.stroke();
    store(currentPosition.x, currentPosition.y, context).then((response) => {
      context.dispatch({
        type: "SET_LINE_ARRAY",
        payload: {
          lineArray: [...context.state.lineArray, response.line],
        },
      });
    });
  }
};

export const mouseUp = () => {
  isMouseDown = false;
};

const store = (x, y, context) => {
  let line = {
    x,
    y,
    size: context.state.size,
    color: context.state.color,
  };
  return new Promise((resolve, reject) => {
    resolve({ line });
  });
};

const reDraw = (canvas, lineArray) => {
  let canvasContext = canvas.current.getContext("2d");
  lineArray.forEach((line, i) => {
    canvasContext.beginPath();
    canvasContext.moveTo(line.x, line.y);
    canvasContext.lineWidth = line.size;
    canvasContext.lineCap = "round";
    canvasContext.strokeStyle = line.color;
    canvasContext.lineTo(line.x, line.y);
    canvasContext.stroke();
  });
};
