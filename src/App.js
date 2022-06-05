import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <AboutMe />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="btn btn-primary">Test</button>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
