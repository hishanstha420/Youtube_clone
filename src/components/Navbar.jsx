import React from 'react'
import {Link } from "react-router-dom"
import {Logo } from "../utils/constants"
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <nav className='flex items-center px-2 py-2 sticky h-16 top-0 justify-between bg-black  '>
       <Link to="/" className="flex items-center ">
        <img src={Logo} alt="logo" className=" h-4 " />
        
       </Link>
      
      <SearchBar />
    </nav>
  )
}

export default Navbar
