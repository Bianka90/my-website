import { useState } from "react";
import "./App.css";
import "./index.css";
import Hero from "./Hero";
import Navbar from "./Navabar";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Lessons from "./Lessons";
function App() {
  return (
    <>
      {console.log(document.body.scrollHeight)}
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Lessons />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
