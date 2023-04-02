import logo from './logo.svg';
import './App.css';

function App() {
  const Click=()=>
  {
    alert("LOGGED IN")
  }
  return (
    <div className="App">
      <h1>WELCOME TO THIS PAGE</h1>
<button onClick={window['alertMsg']}>CLICK ME</button>
    </div>
    
  );
}

export default App;