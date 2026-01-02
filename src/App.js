import { useState } from "react";
import Display from "./components/Display";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>

      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)} style={{ marginLeft: "10px" }}>
        +
      </button>

      <Display count={count} />
    </div>
  );
}

export default App;
