import React, { Suspense } from "react";
import useAppMovieAvengersMf from "./UseAppMovieAvengersMF";

const LazyAppMovieOne = React.lazy(
  () => import("movieOneComponents/AppMovieOne" as any)
);

const AppMovieOneContainer: React.FC = () => {
  const { personagesList } = useAppMovieAvengersMf();
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyAppMovieOne personages={personagesList} />
    </Suspense>
  );
};

export default AppMovieOneContainer;
