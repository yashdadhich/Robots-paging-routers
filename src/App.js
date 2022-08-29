import React from 'react';
import Paging from './components/Paging';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Posts from './components/Posts';



function App() {
  return (
    <div className='tc'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Paging />} />
          <Route exact path='/post/:id' element={<Posts />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;