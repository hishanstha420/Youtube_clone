import React from 'react'
import * as icons from "react-icons/all"
import  categories  from '../utils/constants.js'

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <div className="flex flex-row overflow-y-auto h-auto md:h-[95%] md:flex-col " >
      {categories.map((category, index)=>{
       const Icon= eval(`icons.${category.icon}`)
      return(
      <button className=' font-[12px] capitalize flex items-center content-start cursor-pointer bg-transparent border-none outline-none px-[7px] py-[10px] rounded-xl transition duration-150 ease-out md:ease-in hover:bg-[#272727] mt-1 w-40  'style={{backgroundColor:category.name===selectedCategory&& '#272727', color:"white"}} key={category.name}
      onClick={()=>{setSelectedCategory(category.name)}}
      >
            <span className="mr-[15px]" style={{color:category.name===selectedCategory? "white":"red" }}><Icon /> </span>
            <span >{category.name}</span>
        </button>
        )
      })}
      
    </div>
  )
}

export default SideBar
