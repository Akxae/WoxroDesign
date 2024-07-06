import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Contribution from "./components/Contribution/Contribution";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Header />
        <Hero/>
        <Features/>
        <Contribution/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
