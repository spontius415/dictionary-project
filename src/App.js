import logo from "./Sarah Pontius-logos_black.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by
          <a href="https://github.com/spontius415"> Sarah Pontius</a> and is{" "}
          <a href="https://github.com/spontius415/dictionary-project">
            {" "}
            open-sourced
          </a>{" "}
          and hosted on{" "}
          <a href="https://luxury-froyo-4ba940.netlify.app/"> Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
