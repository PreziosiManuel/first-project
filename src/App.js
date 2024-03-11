import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent name="Manuel" />
        <ImageComponent src="https://placedog.net/400" alt="cane400px" />
        <ButtonComponent name="Alessandro" />
        <ImageComponent src="https://placedog.net/300" alt="cane300px" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
