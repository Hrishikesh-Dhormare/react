
function App() {
  let str ="Student of CDAC"
  let user= { id:7, name:"Hrishikesh", class:"PG-DAC"}
  let user2 ={id:8, name:"Mayur", class:"DBDA"}
  return(
    <>
      <h1 style={{color:"red"}}>{str}</h1>
      <h3>ID:{user.id}</h3>
      <h3>Name:{user.name}</h3>
      <h3>Class:{user.class}</h3>
      <br />
      <h3>ID:{user2.id}</h3>
      <h3>Name:{user2.name}</h3>
      <h3>Class:{user2.class}</h3>
    </>
  );
}

export default App;