import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Videos } from "./";
import { AiFillCheckCircle } from "react-icons/ai";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet, statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) return `Loading...`;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <div className="min-h-[92vh] bg-black">
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1">
          <div className="w-full sticky top-[86px]">
            <ReactPlayer
              className="w-full h-[77vh]"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <h5 className=" font-bold text-white p-2 "> {title} </h5>
            <div className="flex justify-between text-white items-center px-2 py-1">
              <Link className="flex" to={`/channel/${channelId}`}>
                <h6 className="text-xs md:text-sm text-white">
                  {channelTitle}
                </h6>
                <AiFillCheckCircle className="test-xs text-gray-100 ml-1.5" />
              </Link>
              <div className="flex gap-5 items-center text-gray-400 text-sm">
                <p className="">{parseInt(viewCount).toLocaleString()} views</p>
                <p className="">{parseInt(likeCount).toLocaleString()} likes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 py-5 md:py-1 flex content-center items-center">
          <Videos videos={videos} direction="flex-col" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
