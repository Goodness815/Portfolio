import React from "react";
import About from "../src/components/About Me/About";
import Contact from "../src/components/Contact/Contact";
import Findme from "../src/components/Find me/Findme";
import Footer from "../src/components/Footer/Footer";
import Projects from "../src/components/Projects/Projects";
import Showcase from "../src/components/Showcase/Showcase";
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Showcase />
        <Projects />
        <About />
        <Findme />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
