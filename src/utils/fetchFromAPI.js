import axios from "axios";
import * as dotenv from "dotenv";
const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {

      videoId: 'M7FIvfx5J10',
      maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': "53ed318578msh0c51c73c62331a5p19b211jsn9125446512a4",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI= async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }
  