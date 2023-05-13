import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div
      className=" shadow-none rounded-[20px] flex flex-row content-center items-center w-[356px] md:w-[320px] m-auto h-[326px]"
      style={{ marginTop }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col content-center items-center text-center text-white ml-14">
          <img
            className="rounded-full h-[180px] w-[180px] mb-2 "
            style={{ border: "1px solid #e3e3e3" }}
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
          />

          <h6 className="flex">
            {channelDetail?.snippet?.title}
            <AiOutlineCheckCircle
              size={14}
              style={{ color: "gray", marginLeft: "5px", marginTop: "8px" }}
            />
          </h6>

          {channelDetail?.statistics?.subscriberCount && (
            <p className="text-[15px]  text-gray-50 ">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}
              Subscribers
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
