import React from 'react'
import './App.css';
import Home from './Home';
// import Navbar from './Navbar';
import Insights from './Insights';
import Quotes from './Quotes';
import Community from './Community';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import {useSelector, useDispatch} from 'react-redux'
// import {incNumber,decNumber} from "./actions/index";

function App() {
  // const myState = useSelector((state) => state.changeTheNumber)
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <h4>Using react and redux</h4>
      <div className='quantity'>
        <button onClick={ () =>dispatch(decNumber())} className='quatity_minus' title='decrement'><span> - </span></button>
        <input name='quantity' type="text" className='quantity_input' value={myState} />
        <button onClick={ () =>dispatch(incNumber())} className='quatity_plus' title='increment'><span> + </span></button>
      </div> */}
      {/* <Navbar /> */}
      <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Insights" element={<Insights/>}/>
      <Route exact path="/Quotes" element={<Quotes/>}/>
      <Route exact path="/Community" element={<Community/>}/>

      </Routes>
    
     </Router>
    </div>
  );
}

export default App;







