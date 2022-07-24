import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HeadSEO from "../components/HeadSEO";

import useGetCharacter from "../hooks/useGetCharacter";

const Character = () => {
  const { data, loading, error } = useGetCharacter();
  const navigate = useNavigate();
  if (error) {
    Swal.fire("Error", "El personaje no existe", "error").then((res) => {
      console.log("confirm o que ?");
      navigate("/");
    });
    return <div className="text-center text-white">Page not Found 404</div>;
  }
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4 max-w-7xl mx-auto">
      <HeadSEO title={`Rick and Morty | ${data?.name || ""}`} />
      <div className="flex flex-col items-center justify-center w-full">
        {!loading && data ? (
          <div className="flex justify-center items-center aspect-square h-36 md:h-48 ">
            <img className="rounded-full" src={data.image} alt={data.name} />
          </div>
        ) : (
          <div className="flex justify-center items-center aspect-square h-36 md:h-48 bg-gray-300 rounded-full">
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
        )}
        <h2 className="text-white font-semibold text-xl">{data?.name || ""}</h2>
      </div>
      {loading ? (
        <div
          role="status"
          className="space-y-2.5 animate-pulse max-w-lg w-full"
        >
          <div className="flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[400px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[440px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[360px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="w-full text-white">
          <div className="flex gap-1">
            <span className="text-blue-400 font-semibold">genero:</span>
            {data.gender}
          </div>
          <div className="flex gap-1">
            <span className="text-blue-400 font-semibold">especie:</span>
            {data.species}
          </div>
          <div className="flex gap-1">
            <span className="text-blue-400 font-semibold">episodios:</span>
            {data.episode?.length}
          </div>
          <div className="flex gap-1">
            <span className="text-blue-400 font-semibold">origen:</span>
            {data.origin?.name}
          </div>
          <div className="flex gap-1">
            <span className="text-blue-400 font-semibold">estado:</span>
            {data.status}
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
