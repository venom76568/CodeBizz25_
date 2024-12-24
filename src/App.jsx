import ButtonGradient from "./assets/svg/ButtonGradient";
import FAQS from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Gain from "./components/Roadmap";
import About from "./components/About";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        
        <About />
        <Gain />
        <FAQS />
        
       
       
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
