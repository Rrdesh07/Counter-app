import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <h1>{count}</h1>
      <div className="operations">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
