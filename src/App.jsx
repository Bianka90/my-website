import { useState } from "react";
import "./App.css";
import "./index.css";
import Hero from "./Hero";
import Navbar from "./Navabar";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
