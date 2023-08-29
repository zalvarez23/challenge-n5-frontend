import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomeMoviesContainer from "./container/home-movie-container/HomeMoviesContainer";
import AppMovieHarryMF from "./container/app-movie-avenger-mf/AppMovieAvengerMF";
import AppMovieAvengersMF from "./container/app-movie-harry-mf/AppMovieHarryMF";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeMoviesContainer />}>
        <Route path="/movie-one" element={<AppMovieHarryMF />} />
        <Route path="/movie-two" element={<AppMovieAvengersMF />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
