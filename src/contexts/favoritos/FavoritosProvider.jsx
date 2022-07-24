import React, { useState } from "react";
import favoritosContext from "./context";

const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(
    () => JSON.parse(localStorage.getItem("favoritos")) || []
  );

  const handleAddFavorito = (data) => {
    localStorage.setItem("favoritos", JSON.stringify([...favoritos, data]));
    setFavoritos([...favoritos, data]);
  };
  const handleDeleteFavorito = (id) => {
    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos.filter((el) => el.id !== id))
    );
    setFavoritos(favoritos.filter((el) => el.id !== id));
  };
  const value = {
    favoritos,
    handleAddFavorito,
    handleDeleteFavorito,
  };
  return (
    <favoritosContext.Provider value={value}>
      {children}
    </favoritosContext.Provider>
  );
};

export default FavoritosProvider;
