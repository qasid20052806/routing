import './App.css';
import Timer from './Components/Timer';
import StopWatch from './Components/StopWatch';
import Time from './Components/Time';
import { Routes, Route, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
      <NavLink to='/time' style={{background:"red",textDecoration:"none", color:"white",width:"100px"}}>Time</NavLink>
      <NavLink to='/timer' style={{background:"red",textDecoration:"none", color:"white",width:"100px"}}>Timer</NavLink>
      <NavLink to='/stopWatch' style={{background:"red",textDecoration:"none", color:"white",width:"100px"}}>StopWatch</NavLink>
      </div>
    <Routes>
      <Route path='/timer' element={<Timer/>}/>
      <Route path='/time' element={<Time/>}/>
      <Route path='/stopWatch' element={<StopWatch/>}/>
    </Routes>
    </div>
  );
}

export default App;