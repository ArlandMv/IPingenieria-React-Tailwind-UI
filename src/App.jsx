import { useEffect, useState } from "react";
import "./App.css";
// components const App = () => {
import {
  Header,
  Hero,
  Features,
  Services,
  Footer,
  NavMobile,
} from "./components";
// aos init
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";

const App = () => {
  //function App() {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="w-full overflow-hidden ">
      {/*<Header setNavMobile={setNavMobile} />*/}
      <Hero />
      {/*<div
        className={`${navMobile ? "right-0" : "right-full"} 
			fixed top-0 z-10 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>*/}
      <Features />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
