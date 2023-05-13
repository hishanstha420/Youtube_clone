import React from 'react'
import {Link } from "react-router-dom"
import {IoLogoYoutube} from "react-icons/io";
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <nav className='flex items-center px-2 py-2 sticky h-16 top-0 justify-between bg-black  '>
       <Link to="/" className="flex items-center ">
       <IoLogoYoutube className='text-[#FF0000] ' size={30}/> 
       </Link>
      
      <SearchBar />
    </nav>
  )
}

export default Navbar
