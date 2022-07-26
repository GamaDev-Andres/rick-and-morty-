import { Navigate } from "react-router-dom";
import HeadSEO from "../components/HeadSEO";
import ListOfCards from "../components/ListOfCards";
import Paginador from "../components/Paginador";
import Spinner from "../components/Spinner";
import useGetCharacters from "../hooks/useGetCharacters";
const Characters = () => {
  const { data, loading, error } = useGetCharacters();

  return !error ? (
    <div className="px-4">
      <HeadSEO title="Rick and Morty | personajes" />
      <main className="my-4 max-w-7xl mx-auto">
        <h2 className="text-center text-semibod text-2xl text-white pb-4">
          Personajes
        </h2>
        {data.info && <Paginador info={data.info} />}
        {loading ? <Spinner /> : <ListOfCards data={data.results} />}
        {data.info && <Paginador info={data.info} />}
      </main>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Characters;
