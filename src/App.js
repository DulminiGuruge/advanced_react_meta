
import './App.css';
import Desserts from './Desserts';
import {Routes,Route,Link } from 'react-router-dom';
import Reverse from './Reverse';


function App() {
  return (
    <div className="App">

      <nav className="nav">
        <Link to="/" className='nav-item'>Desserts</Link>
        <Link to="/reverse" className='nav-item'>Reverse</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Desserts/>}/>
        <Route path="/reverse" element={<Reverse/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
