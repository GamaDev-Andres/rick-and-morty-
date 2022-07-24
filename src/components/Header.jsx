import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-sm bg-black px-4 py-2 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-2xl">Rick & Morty</h1>
        </Link>
        <nav className="flex items-center justify-between">
          <Link
            className="px-2 hover:text-blue-500 transition-colors duration-300 border-r-2"
            to="/favoritos"
          >
            Favoritos
          </Link>
          <Link
            className="px-2 hover:text-blue-500 transition-colors duration-300"
            to="/"
          >
            Personajes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
