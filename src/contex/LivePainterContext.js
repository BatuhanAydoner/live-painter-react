import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const defaultContext = {
  color: "#000000", // pencil color.
  background: "#ffffff", // canvas background color.
  isErase: false, // Erase is used when it is true.
  size: 1, // Pencil width.
  field: {
    width: 500, // Canvas width.
    height: 500, // Canvas height.
  },
};

const LivePainterContext = createContext(defaultContext);

export const LivePainterProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };
  return (
    <LivePainterContext.Provider value={value}>
      {props.children}
    </LivePainterContext.Provider>
  );
};

export default LivePainterContext;
