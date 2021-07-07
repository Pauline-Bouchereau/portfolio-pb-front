import "./App.css";

// Import components
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// To go from dev mode to live mode --> change the serverUrl :
// Local server : "http://localhost:3001"
// Heroku server : ""
const serverUrl = "http://localhost:3001";

function App() {
  return (
    <div>
      <Menu />
      <div className="container">
        <Header />
        <About />
        <Stack />
        <Projects serverUrl={serverUrl} />
        <Resume />
        <Contact serverUrl={serverUrl} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
