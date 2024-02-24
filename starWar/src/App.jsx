import React, { Suspense } from "react";
import "./index.css";
const Card = React.lazy(() => import("./Components/Card"));



function App() {
  return (
    <>
      <div className="header">
        <h1>
          List Of{" "}
          <span>
            <i>Planets </i>
          </span>
          In Our <span>Star Wars.</span>
        </h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Card />
      </Suspense>
    </>
  );
}

export default App;
