import { useState } from 'react'
import  { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import {Navbar , Feed, VideoDetail, SearchFeed, ChannelDetail } from "./components"
function App() {

  return (
    <BrowserRouter>
      <div className=' '>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Feed/>} />
          <Route path='/video/:id' element={<VideoDetail/>} />
          <Route path='/channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
