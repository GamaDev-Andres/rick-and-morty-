const url = "https://rickandmortyapi.com/api/character";
const getCharacteres = async (page = 1) => {
  try {
    const res = await fetch(`${url}?page=${page}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCharacteres;
