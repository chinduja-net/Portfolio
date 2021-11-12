import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Description from "./components/Description";

function App() {
  return (
    <main className="m-0 p-0 box-border bg-gray-200">
      <About />
      <Description />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
