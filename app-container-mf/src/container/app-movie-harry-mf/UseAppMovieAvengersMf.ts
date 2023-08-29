import { useEffect, useState } from "react";
import { PersonagesServices } from "./../../services/personages/personages-services";
import { IPersonage } from "types/personages/personages.interface";
import { HARRY_MOVIE_ID } from "./../../constants/values";

const useAppMovieHarryMf = () => {
  const personagesServices = new PersonagesServices();
  const [mounted, setMounted] = useState(true);
  const [personagesList, setPersonagesList] = useState<IPersonage[]>([]);

  const getMovies = async (): Promise<void> => {
    const result = await personagesServices.getPersonages(HARRY_MOVIE_ID);
    setPersonagesList(result);
  };

  useEffect(() => {
    if (!mounted) {
      getMovies();
    }
    setMounted(false);
  }, [mounted]);

  return {
    personagesList,
  };
};
export default useAppMovieHarryMf;
