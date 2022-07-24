import HeadSEO from "../components/HeadSEO";
import ListOfCards from "../components/ListOfCards";
import useFavoritos from "../hooks/useFavoritos";

const Favoritos = () => {
  const { favoritos } = useFavoritos();
  return (
    <div className="px-4">
      <HeadSEO title="Rick and Morty | favoritos" />
      <main className="my-4 max-w-7xl mx-auto">
        <h2 className="text-center text-semibod text-2xl text-white pb-4">
          Favoritos
        </h2>
        {favoritos.length > 0 ? (
          <ListOfCards data={favoritos} />
        ) : (
          <span className="text-white">
            No has agregado personajes a tu lista de favoritos.
          </span>
        )}
      </main>
    </div>
  );
};

export default Favoritos;
