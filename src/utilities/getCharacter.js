const url = "https://rickandmortyapi.com/api/character";
const getCharacters = async (id) => {
  try {
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCharacters;
