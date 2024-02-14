import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;
