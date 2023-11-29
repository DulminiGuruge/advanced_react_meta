
import './App.css';
import Desserts from './Desserts';
import {Routes,Route,Link } from 'react-router-dom';
import Reverse from './Reverse';
import Feedback from './Feedback';


function App() {
  return (
    <div className="App">

      <nav className="nav">
        <Link to="/" className='nav-item'>Desserts</Link>
        <Link to="/reverse" className='nav-item'>Reverse</Link>
        <Link to="/feedback" className='nav-item'>Feedback</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Desserts/>}/>
        <Route path="/reverse" element={<Reverse/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
