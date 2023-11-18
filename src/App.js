import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/Scrollup/ScrollUp";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />

        <Qualification />
        <Projects />

        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
