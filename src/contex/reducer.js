export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload.color,
        oldColor: action.payload.color,
      };
    case "SET_BG_COLOR":
      return {
        ...state,
        background: action.payload.background,
      };
    case "SET_IS_ERASE":
      return {
        ...state,
        color: !state.isErase ? state.background : state.oldColor,
        isErase: !state.isErase,
      };
    case "SET_CLEAR":
      return {
        ...state,
        clear: action.payload.clear,
      };
    case "SET_SIZE":
      return {
        ...state,
        size: action.payload.size,
      };
    case "SET_FIELD":
      return {
        ...state,
        field: {
          ...state.field,
          ...action.payload,
        },
      };
    case "SET_LINE_ARRAY":
      return {
        ...state,
        lineArray: [...action.payload.lineArray],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
