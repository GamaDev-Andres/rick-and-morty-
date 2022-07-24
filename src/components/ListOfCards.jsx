import useFavoritos from "../hooks/useFavoritos";
import Card from "./Card";

const ListOfCards = ({ data }) => {
  const { favoritos } = useFavoritos();

  return (
    <div className="grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((data) => (
        <Card
          key={data.id}
          data={data}
          isFavorito={favoritos.some((el) => el.id === data.id)}
        />
      ))}
    </div>
  );
};

export default ListOfCards;
