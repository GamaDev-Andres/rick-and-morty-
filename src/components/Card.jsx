import { Link } from "react-router-dom";
import useFavoritos from "../hooks/useFavoritos";

const Card = ({ data, isFavorito }) => {
  const { handleAddFavorito, handleDeleteFavorito } = useFavoritos();

  return (
    <div className="relative max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div
        className={`py-1 px-2 absolute top-4 right-4 text-white rounded-lg ${
          data.status === "Alive" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {data.status}
      </div>
      <Link to={`/c/${data.id}`}>
        <img className="rounded-t-lg" src={data.image} alt={data.name} />
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
