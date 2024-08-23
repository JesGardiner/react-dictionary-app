import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">English Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Jess Gardiner, open sourced on{" "}
            <a
              href="https://github.com/JesGardiner target=_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            & hosted on{" "}
            <a
              href="https://rainbow-narwhal-53fa5b.netlify.app/ target=_blank"
              rel="noreferrer"
            >
              Netlify
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
