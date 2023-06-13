import logo from "./logo.svg";
import "./App.css";

function App() {
  let sty = { color: "red", background: "blue" };
  return (
    <>
      <h1 style={{ background: "black", color: "white" }}>Hello</h1>
      <h1 style={sty}>Good Morning</h1>
      <Para/>
      <Para/>
      <Para/>
    </>
  );
}

function Para() {
  return (
    <p style={{border:"solid", padding:"5", background:"silver"}}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
      laborum, iusto asperiores deserunt totam a accusamus alias sequi, animi
      quas expedita impedit nulla eligendi earum id! Sequi atque non
      praesentium?
    </p>
  );
}

// export Para;
export default App;
