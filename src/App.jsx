// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Motivasi from "./components/Motivasi/Motivasi";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Hero />
      <Team />
      <Motivasi />
      <Footer />
    </div>
  );
};

export default App;
