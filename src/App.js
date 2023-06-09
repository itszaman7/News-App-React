import './App.css';

import React, {useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>{
  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div className='bg-dark'>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#00d2d3'
        progress={progress}
        />
        <Routes>
        <Route exact path='/'element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general"/>}></Route>
        <Route exact path='/business'element={<News setProgress={setProgress} apiKey={apiKey} key="bussiness" pageSize={pageSize} category="business"/>}></Route>
        <Route exact path='/entertainment'element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment"/>}></Route>
        <Route exact path='/health'element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health"/>}></Route>
        <Route exact path='/science'element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science"/>}></Route>
        <Route exact path='/sports'element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports"/>}></Route>
        <Route exact path='/technology'element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App
