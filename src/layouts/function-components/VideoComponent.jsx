import { useState } from "react";
import { Play } from "react-feather";
import YouTube from "react-youtube";

const VideoComponent = ({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width,
}) => {
  const [play, setPlay] = useState(false);
  const videoOptions = {
    borderRadius: "16px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {!play ? (
        <div className="relative text-center ">
          <button className="video-play-btn" onClick={() => setPlay(true)}>
            <Play />
          </button>
          <img
            width={width}
            height={height}
            src={src}
            alt={title}
            className="inline max-w-full aspect-video"
          />
        </div>
      ) : (
        <div className="youtube text-center aspect-video h-full w-full bg-black">
          <YouTube
            videoId={video_id}
            // videoId=""
            opts={videoOptions}
            iframeClassName={`!aspect-video !w-full !h-full ${video_height} ${video_width} max-w-full bg-transparent`}
          />
        </div>
      )}
    </>
  );
};

export default VideoComponent;
