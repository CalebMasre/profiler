
import './App.css';
import rdata from  './index.js';

function App() {
   function Name() {
    return (
      <>
        <h1>{rdata.name}</h1>
        
      </>
    );
  }//end of Name Component


  function Image() {
    return (
      <>
      <img src={rdata.imgURL}  />
      </>
    );
  }//end of Image Component

  function Hobbies(){
    var ls = rdata.hobbyList;
    return(
    <ul>

      {ls.map((item, index) => {
        return <li key = {index}>{item}</li>;
      })}
    </ul>
    )
  }//end of Hobbies Component


  return (
    <div className="App">
      <header className="App-header">
         <Name></Name>
         <Image></Image>
         <h4>My hobbies: </h4>
        <Hobbies></Hobbies>
      </header>
    </div>
  );
}

export default App;
