import React from "react";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Tours from "./component/Tours";
import Services from "./component/Services";
import About from "./component/About";


function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Tours />
      <Services />
      <Footer />
    </>
  );
}

export default App;
