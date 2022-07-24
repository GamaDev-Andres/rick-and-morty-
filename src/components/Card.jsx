import { useState } from "react";
import { Link } from "react-router-dom";

import useFavoritos from "../hooks/useFavoritos";

const Card = ({ data, isFavorito }) => {
  const { handleAddFavorito, handleDeleteFavorito } = useFavoritos();
  const [isImgLoad, setIsImgLoad] = useState(false);

  return (
    <div className="relative max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div
        className={`py-1 px-2 absolute top-4 right-4 text-white rounded-lg ${
          data.status === "Alive" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {data.status}
      </div>
      {!isImgLoad ? (
        <div className="flex justify-center items-center aspect-square w-full min-w-[280px] bg-gray-300">
          <svg
            className="w-12 h-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
      ) : (
        <></>
      )}
      <Link to={`/c/${data.id}`}>
        <img
          className={`${!isImgLoad ? "hidden" : "block"} rounded-t-lg`}
          src={data.image}
          onLoad={() => setIsImgLoad(true)}
          alt={data.name}
        />
      </Link>

      <div className="p-5">
        <Link to={`/c/${data.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
        </Link>
        <small className="text-gray-500">ultima localización</small>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.location.name}
        </p>
        <div className="flex items-center justify-between">
          <Link
            to={`/c/${data.id}`}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <button
            onClick={() =>
              !isFavorito
                ? handleAddFavorito(data)
                : handleDeleteFavorito(data.id)
            }
            className={`py-2 px-3 text-sm font-medium text-center text-white bg rounded-lg ${
              !isFavorito ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isFavorito ? "Remove" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
