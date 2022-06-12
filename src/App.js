import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Hobby from "./component/Hobby";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <AboutMe/>
        <Hobby/>
        <button className="btn btn-primary">Test</button>
      </div>
    </div>
  );
}

export default App;
