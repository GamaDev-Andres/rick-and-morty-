import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FavoritosProvider from "./contexts/favoritos/FavoritosProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
