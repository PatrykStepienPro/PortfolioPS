import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Hobby from "./component/Hobby";
import Contact from './component/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <AboutMe/>
        <Hobby/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
