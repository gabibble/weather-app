import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was created by{" "}
          <a
            href="https://www.juliagiebultowicz.com"
            target="_blank"
            rel="noreferrer"
          >
            Julia Giebultowicz
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/gabibble/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
