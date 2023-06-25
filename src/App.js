import { Routes, Route } from "react-router-dom"
import { useState, useEffect, Fragment } from "react";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { Main } from "./components/Main/Main.js";

function App() {
  return (
    <Fragment>
      <Header />

      <Main />

      <Footer />
    </Fragment>
  );
}

export default App;
