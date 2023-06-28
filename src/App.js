import { Routes, Route } from "react-router-dom"
import { useState, useEffect, Fragment } from "react";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { Main } from "./components/Main/Main.js";
import { LangContext } from "./contexts/Language.js";

function App() {
  const [lang, setLang] = useState('BG');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Fragment>
        <Header />

        <Main />

        <Footer />
      </Fragment>
    </LangContext.Provider>
  );
}

export default App;
