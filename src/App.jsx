import About from "./components/About/About";
import Apresentation from "./components/Apresentation/Apresentation";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Apresentation />
      <About />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;
