import { createContext } from "react";

export const initialState = {theme: "", data: []}
// Tema de colores para toda la app (claro u oscuro)
// Para el manejo y actualización del estado global deberán implementar el hook useReducer. Con dicho hook deberán implementar el cambio de 
// tema de colores (con un botón en la app específico para ello dentro de Navbar), de claro a oscuro y viceversa.
export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
