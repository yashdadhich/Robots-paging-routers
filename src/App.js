import React from 'react';
import Paging from './components/Paging';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Post from './components/Post';



function App() {
  return (
    <div className='tc'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Paging />} />
          <Route exact path='/post/:id' element={<Post />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;