import "./App.css";

// Import components
import Menu from "./components/Menu/Menu"
import About from "./components/About/About"
import Stack from "./components/Stack/Stack"
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <Menu/>
      <div className="container">
      <About/>
      <Stack/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
