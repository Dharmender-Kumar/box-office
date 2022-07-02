import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<div>Home page</div>}></Route>
          <Route
            exact
            path="/starred"
            element={<div>This is starred</div>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
