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
