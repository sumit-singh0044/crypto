import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
const App = () => {
  return (
    <>
      <div className="container">
        <div className="head">
          <Header />
        </div>
        <div>
          <Footer />
        </div>

        <div className="content">
          <Content />
        </div>
      </div>
    </>
  );
};

export default App;
