import { createContext, useContext, useReducer } from "react";

import appReducer from "../reducers/appReducer";
import { initialState } from "../reducers/appReducer";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}