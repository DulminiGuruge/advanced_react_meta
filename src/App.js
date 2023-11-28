
import './App.css';
import Desserts from './Desserts';
import {Routes,Route,Link } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <nav classname="nav">
        <Link to="#" className='nav-item'>Desserts</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Desserts/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
