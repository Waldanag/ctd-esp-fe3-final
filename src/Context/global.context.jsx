import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducers/reducer";

export const initialState = {
  theme: "",
  data: [],
  favs: []
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

  let data = { state, dispatch }
  return (
    <ContextGlobal.Provider value={data}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal)
