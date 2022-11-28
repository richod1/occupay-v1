
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About';
import Payfee from './Pages/Payfee';
import Payresit from './Pages/Payresit';
import Process from './Pages/Process';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/payfee"  element={<Payfee/>}/>
        <Route path="/process"  element={<Process/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/signin"  element={<SignIn/>}/>
        <Route path="/payresit"  element={<Payresit/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
