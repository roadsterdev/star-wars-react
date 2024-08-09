import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../services/swapi";

const useCharacters = (page: number) => {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: () => fetchPeople(page),
    placeholderData: keepPreviousData,
  });
};

export default useCharacters;
