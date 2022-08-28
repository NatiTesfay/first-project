import React from "react";
import "./styles.css";

import Header from "./components/pages/Header/Header";
import Main from "./components/pages/Main/Main";
import Footer from "./components/pages/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
