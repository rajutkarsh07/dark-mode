import "./App.css";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [inputvalue, setInputvalue] = useState("");

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
