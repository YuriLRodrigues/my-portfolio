import About from "./components/About";
import Contact from "./components/Portfolio";
import Header from "./components/Header";
import InitialDisplay from "./components/InitialDisplay";
import Knowledges from "./components/Knowledges";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
  return (
    <>
      <Header />
      <InitialDisplay />
      <About />
      <Knowledges />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
