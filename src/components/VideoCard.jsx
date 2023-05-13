import React from 'react'
import {Link } from 'react-router-dom'
import {AiOutlineCheckCircle} from "react-icons/ai"
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle } from '../utils/constants'

const VideoCard = ({video:{id:{
    videoId}, snippet}}) => {

  return (
    <div className='w-[320px] md:w-80 sm:w-[358px] rounded-none shadow-none ' >
        <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
        <div>
            <img className=' w-[100%] sm:w-[358px] md:w-80 h-[220px] rounded  ' src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
        </div>
        </Link>
        <div className='bg-[#0f0f0f] h-[106px] '>
        <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
        <div className='text-[#fff]  font-bold text-sm' >
            {snippet?.title.slice(0,60)|| demoVideoTitle.slice(0,60)}
        </div>
        </Link>
        <Link to={snippet?.channelId?`/channel/${snippet?.channel}`: demoChannelUrl}>
        <div className=' flex font-bold text-xs text-[gray] ' >
            {snippet?.channelTitle.slice(0,60)|| demoChannelTitle.slice(0,60)}
            <AiOutlineCheckCircle size={12} style={{color:'gray',marginLeft:'5px', marginTop:'3px' }}/>
        </div>
        </Link>
        </div>
      
    </div>
  )
}

export default VideoCard
