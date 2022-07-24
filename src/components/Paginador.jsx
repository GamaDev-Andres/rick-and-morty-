import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Paginador = ({ info }) => {
  const [searchParams] = useSearchParams();

  return (
    <div className="px-4 my-2 flex items-center justify-between">
      {info.prev ? (
        <Link
          to={`.?page=${Number(searchParams.get("page")) - 1}`}
          className="px-2 py-1 text-white bg-blue-400 rounded-lg"
        >
          {"<< prev"}
        </Link>
      ) : (
        <div></div>
      )}
      {info.next ? (
        <Link
          to={`.?page=${Number(searchParams.get("page")) + 1}`}
          className="px-2 py-1 text-white bg-blue-400 rounded-lg"
        >
          {"next >>"}
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Paginador;
