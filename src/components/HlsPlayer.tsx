import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hls = new Hls();

    if (video && Hls.isSupported()) {
      hls.loadSource("http://localhost:8800/hls/index.m3u8");
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "http://localhost:8800/hls/stream.m3u8";
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }

    return () => {
      hls.destroy();
    };
  }, []);

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
