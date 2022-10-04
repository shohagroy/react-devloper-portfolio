import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Skills/>
      
    </div>
  );
}

export default App;
