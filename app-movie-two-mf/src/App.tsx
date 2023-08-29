import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MovieTwoComponent from "./component/MovieTwoComponent";

const App: React.FC = () => (
  <div className="container">
    <MovieTwoComponent />
  </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
