 import logo from './logo.svg';
import './App.css';

function App() {
  let person={
    name: " Sunn ",
    id:"20301281",
    job:"programmer",
    address:"Dhaka"
  }

  let style={
    color: "red",
    backgroundColor: "gray"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done here !!  <code>src/App.js</code> and save to reload.
        </p>
        
        <p> my first react paragraph</p>
        <h1 style={{color: "goldenrod",backgroundColor: "pink"}}>why {2+4*43%2}</h1>
        <h3  className="" style={style} >{person.name+" : "+person.id}</h3>
      </header>
    </div>
  );
}

export default App;
