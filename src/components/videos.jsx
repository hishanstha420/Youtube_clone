import React from 'react'
import {VideoCard, ChannelCard} from "./"
const Videos = ({videos, direction}) => {
  if(!videos?.length) return "Loading..."
  return (
    <div className={`flex ${direction}|| flex-row content-center items-center md:content-center m-3 gap-2 flex-wrap`} >
      
      {videos.map((item, index)=>{
        return(
          <div key={index}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && < ChannelCard channelDetail={item} />}
          </div>
        )
      })}
    </div>
  )
}

export default Videos
