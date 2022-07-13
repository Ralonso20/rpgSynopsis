//import logo from './logo.svg';
import './App.css';
import { Synopsis } from './componentes/Synopsis'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Encuentra una historia a tu gusto</h1>
        <Synopsis />
      </div>
    </div>
  );
}

export default App;
