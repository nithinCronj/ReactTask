import './App.css';
import React from 'react';
// import Nav from './Nav';
// import About from './About';
import {BrowserRouter as Router,Routes ,Route,Navigate} from 'react-router-dom';
/* import Shop from './Shop';
import Home from './Home'; */
import Dashboard from './Dashboard';
import Login from './Login';

function App() {


  return (

    <Router>
          <div className="App">
    
          <Routes>
              <Route path="/login" element={<Dashboard/>} />  
              <Route path="/" element={<Login/>} />  
          </Routes>
          </div>
    </Router>
  );
}



export default App;
