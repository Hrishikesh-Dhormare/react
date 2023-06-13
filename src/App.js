import "bootstrap/dist/css/bootstrap.css";
import "./App.css"

function App() {
  return (
    <>
      <div className="row justify-content-center align-items-center">
      <div className="col-sm-12 col-md-6">
      <div className="row bg-secondary">  
      <div className="col-5">
      <h1 className="text-warning text">My Project </h1>
      </div>
      <div className="text-warning col-5"><List/>
      </div>
      </div>  
      <Cont/>
      <Cont/>
      <Cont/>
      </div>
      </div>
      <div className="row justify-content-center align-items-center">
      <div className="col-sm-12 col-md-6 text">
      <Foot/>
      </div>
      </div>
      
    </>
  );
}

function Cont() {
  return (
    <>
      <h3 className="alert alert-warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti,
        quibusdam, harum deleniti doloribus facere et aliquam culpa quam hic
        perspiciatis quaerat corporis, minus maiores fugit a beatae distinctio
        non!
      </h3>
    </>
  );
  
}

function List(){
  return(
    <ul>
      <li>Menu</li>
      <li>About us</li>
    </ul> 
  );
}

function Foot(){
  return(
    <>
      <h2 className="bg-secondary text-warning">Footer</h2>
    </>
  );
}

export default App;
