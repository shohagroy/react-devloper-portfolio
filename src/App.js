import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
