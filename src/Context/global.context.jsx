import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/reducer";

export const initialState = {
  theme: localStorage.getItem('theme') || "light",
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)
  
  console.log(state);
  
  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs]);
  
  useEffect(()=>{
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({type: 'CHANGE_THEME'})
  }
  
  
  let data = { state, dispatch, toggleTheme }
  return (
    <ContextGlobal.Provider value={data}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);
