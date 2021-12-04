import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Description from "./components/Description";
import BottomNav from "./components/BottomNav";




function App() {
  return (
    <main className="bg-purple-300">
      <About />
      <Description />
      <Projects />
      <Skills />
      <Contact />
     <BottomNav/>
    </main>
  );
}

export default App;
