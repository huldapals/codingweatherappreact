import "./App.css";
import Weather from "./Weather.js";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Copenhagen" />
        <div className="github-repository">
          <a
            href="https://github.com/huldapals"
            target="_blank"
            rel="noreferrer"
            alt="Link to github repository"
            className="link-dark"
          >
            Open-Source Code
          </a>
          &nbsp;by Hulda Palsdottir 
        </div>
      </div>
    </div>
  );
}