
function App() {
  let str ="Student of CDAC"
  let user= { id:7, name:"Hrishikesh", class:"PG-DAC"}

  return(
    <>
      <h1>{str}</h1>
      <h3>ID:{user.id}</h3>
      <h3>Name:{user.name}</h3>
      <h3>Class:{user.class}</h3>
    </>
  );
}

export default App;