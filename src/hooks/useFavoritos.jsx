import { useContext } from "react";
import favoritosContext from "../contexts/favoritos/context";

const useFavoritos = () => {
  const context = useContext(favoritosContext);
  return context;
};

export default useFavoritos;
