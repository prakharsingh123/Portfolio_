import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contact/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Resume/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
