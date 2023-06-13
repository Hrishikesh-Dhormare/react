
function App() {
  let str ="Student of CDAC"
  let user= { id:7, name:"Hrishikesh", class:"PG-DAC"}

  return(
    <>
      <h1>{str}</h1>
      <h1>ID:{user.id}</h1>
      <h1>Name:{user.name}</h1>
      <h1>Class:{user.class}</h1>
    </>
  );
}