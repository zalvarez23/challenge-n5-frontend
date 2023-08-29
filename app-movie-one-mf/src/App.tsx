import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MovieOneComponent from "./../src/component/MovieOneComponent";

const App: React.FC = () => (
  <div className="container">
    <MovieOneComponent />
  </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
