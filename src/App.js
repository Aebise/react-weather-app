import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/Aebise/weather-react" target="_blank">
            Source code &nbsp;
          </a>
          by Aebise Chimdessa
        </footer>
      </div>
    </div>
  );
}

export default App;
