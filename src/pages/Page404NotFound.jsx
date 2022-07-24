import React from "react";
import { Link } from "react-router-dom";

const Page404NotFound = () => {
  return (
    <div className="rounded-lg h-full my-4 flex items-center mx-auto justify-center">
      <div className="text-white p-4 flex flex-col items-center justify-center w-full gap-4">
        <h2 className="text-2xl font-bold">Página no encontrada!.</h2>
        <Link className="bg-blue-400 p-2 rounded max-w-[200px]" to="/">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default Page404NotFound;
