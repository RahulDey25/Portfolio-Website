// import logo from './logo.svg';
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import {Projects} from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import {Resume} from "./components/Resume";
// import {}
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutMe } from "./components/AboutMe";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <AboutMe />
      <Resume />
    </div>
  );
}

export default App;
