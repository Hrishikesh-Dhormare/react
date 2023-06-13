function App() {
  let str = "Basic variable binding"
  let pi= 3.14;
  let isUserLogin = true;


  return(
    <>
      <h1>{str}</h1>
      <h2>{pi}</h2>
      <h3>{isUserLogin && <h1>Welcome CDAC</h1>}</h3>
      <h3>{isUserLogin && <p>Try Again</p>}</h3>
    </>
  )
}

export default App;