import React, { Suspense, useState } from "react";
import useAppMovieHarryMf from "./UseAppMovieAvengersMf";

const LazyAppMovieTwo = React.lazy(
  () => import("movieTwoComponents/AppMovieTwo" as any)
);

const AppMovieTwoContainer: React.FC = () => {
  const { personagesList } = useAppMovieHarryMf();
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyAppMovieTwo personages={personagesList} />
    </Suspense>
  );
};

export default AppMovieTwoContainer;
