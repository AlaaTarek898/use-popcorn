import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Starrating from "./Star";
import App from "./App";

// function Test() {
//   const [movierate, setmovierate] = useState(0);
//   return (
//     <div>
//       <Starrating color="blue" maxrating={10} onSetRating={setmovierate} />
//       <p>this movie rate is {movierate}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Starrating
      maxrating={5}
      color="red"
      size={100}
      className="default"
      message={["Terrible", "Bad", "Good", "VeryGood", "Amazing"]}
    />
    <Starrating maxrating={10} defaultRating={6} />
    <Test /> */}
    <App />
  </React.StrictMode>
);
