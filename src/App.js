
import './App.css';
import Desserts from './Desserts';
import {Routes,Route,Link } from 'react-router-dom';
import Reverse from './Reverse';
import Feedback from './Feedback';
import Form from './Form';
import ThemeChange from './ThemeChange';


function App() {
  return (
    <div className="App">

      <nav className="nav">
        <Link to="/" className='nav-item'>Desserts</Link>
        <Link to="/reverse" className='nav-item'>Reverse</Link>
        <Link to="/feedback" className='nav-item'>Feedback</Link>
        <Link to="/form" className='nav-item'>Form</Link>
        <Link to="/themeChange" className='nav-item'>Theme Change</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Desserts/>}/>
        <Route path="/reverse" element={<Reverse/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/themeChange' element={<ThemeChange/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
