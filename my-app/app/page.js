import Image from "next/image";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Infinite from "./components/Infinite.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <>
    <Hero/>
    <Services/>
    <Projects/>
    <Infinite/>
    <Footer/>
    </>
  );
}
