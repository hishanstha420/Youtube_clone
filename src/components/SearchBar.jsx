import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate =useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <form
      className="bg-white rounded-3xl border-[#e3e3e3] px-2 mr-5 flex text-red-600 h-10 "
      onSubmit={handleSubmit}
    >
      <input
        className="w-64 outline-none text-black rounded-3xl "
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <button type="button">
        <AiOutlineSearch size={17} />
      </button>
    </form>
  );
};

export default SearchBar;
