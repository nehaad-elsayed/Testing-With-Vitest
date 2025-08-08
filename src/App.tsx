import "./App.css";
import Counter from "./Components/Counter/Counter";
import Pizza from "./Components/Pizza/Pizza";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <Counter />
        <Pizza />
      </div>
    </>
  );
}

export default App;
