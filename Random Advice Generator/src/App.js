import { useState } from "react";
import Main from "./Main";
import Nav from "./Nav";
import "./styles.css";
import mainImage from "./assets/socialFriends.png";

export default function App() {
  const [query, setQuery] = useState("Life");
  return (
    <div className="App">
      <h1> Random Advice Generator </h1>
      <img src={mainImage} alt="Two friends" />
      <Nav action={setQuery} />
      <Main query={query} />
      <h2>Was this helpful?</h2>
      <button id="yesButton" type="button">
        Yes
      </button>
      <button id="noButton" type="button">
        No
      </button>
      <footer>
        CMSI 2021
        <div id="projectMembers">
          Chris Carmona | Claudia Gusti | Stephanie Susilo{" "}
        </div>
        <a href="https://github.com/ChrisCarmona99/Random-Advice-Generator---CMSI-2021-Assignment-2.git">
          GitHub Repo
        </a>
      </footer>
    </div>
  );
}
import { useState } from "react";
import Main from "./Main";
import Nav from "./Nav";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("Life");
  return (
    <div className="App">
      <h1> Random Advice Generator </h1>
      <Nav action={setQuery} />
      <Main query={query} />
    </div>
  );
}
