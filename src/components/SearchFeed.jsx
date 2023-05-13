import React from 'react'
import { useState, useEffect } from 'react'
import {Videos} from './' 
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const [videos, setVideos]=useState([])
  const {searchTerm}= useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm])

  return (
    <div className='font-bold mb-2 text-white overflow-y-auto flex-2 height-[92vh] p-2 bg-black'>
      <h4 className='font-black text-white mb-3 sm:ml-[100px] '>Search Results for: <span className='text-[#F31503] '>{searchTerm} </span>videos</h4> 
      <Videos videos={videos}/>
     </div>
  )
}

export default SearchFeed
