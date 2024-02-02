import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Home from './components/Home'
import NavLink from './components/NavLink'

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      </div>
      </Router>
      
    </div>
  );
}

export default App;
