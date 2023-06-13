function App() {
  let str = "Basic variable binding"
  let pi= 3.14;
  let active = true;


  return(
    <>
      <h1>{str}</h1>
      <h2>{pi}</h2>
      <h3>{!active? "True": "False"}</h3>
    </>
  )
}

export default App;