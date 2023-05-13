import React from 'react'
import { useState, useEffect } from 'react'
import {SideBar,Videos} from './' 
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {
  const [selectedCategory, setSelectedCategory]=useState('New')
  const [videos, setVideos]=useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])

  return (
    <div className='flex flex-col md:flex-row pt-5   bg-black '>
     <div className='h-auto md:h-[92vh] px-0 md:px-2 ' style={{borderRight:"1px solid #3d3d3d"}}>
      <SideBar
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}
       />
      {/* <p className='mt-2 text-[12px] text-white '>CopyRight 2022</p> */}
     </div>
     
     <div className='font-bold mb-2 overflow-y-auto flex-2 height-[92vh] p-2 text-white'>
       {selectedCategory} <span className='text-[#F31503] '>Videos</span>
      <Videos videos={videos}/>
     </div>
    </div>
  )
}

export default Feed
