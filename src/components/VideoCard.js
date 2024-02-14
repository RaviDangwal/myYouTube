import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  //destrcuting and gtting data from info props
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 ml-10 w-72 shadow-lg">
      <img className="" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
