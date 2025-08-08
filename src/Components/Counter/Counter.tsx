import  { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Counter</h1>
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          margin: "1rem 0",
          color: count > 0 ? "#4CAF50" : count < 0 ? "#f44336" : "#2196F3",
        }}
      >
        {count}
      </div>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={decrement}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.2rem",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Decrease
        </button>
        <button
          onClick={reset}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.2rem",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
        <button
          onClick={increment}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.2rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
}
