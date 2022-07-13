import { createContext, useReducer } from "react";
// create themeContext Object
export const themeContext = createContext();

// intialize state

const intialState = { darkMode: true };

// reducer

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};
// exporting theme provider
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(ThemeReducer, intialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
