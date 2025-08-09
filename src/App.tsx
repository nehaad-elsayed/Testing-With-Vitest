import "./App.css";
import Cart from "./Components/Cart/Cart";
import Counter from "./Components/Counter/Counter";
import Pizza from "./Components/Pizza/Pizza";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <Counter />
        <Pizza />
        <Cart items={["Pizza", "Pasta", "Burger"]}/>
      </div>
    </>
  );
}

export default App;
