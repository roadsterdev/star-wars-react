const API_URL = "https://swapi.dev/api/people/";

export const fetchPeople = async (page = 1) => {
  return await fetch(`${API_URL}?page=${page}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
