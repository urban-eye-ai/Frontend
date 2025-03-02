import React from "react";
import HlsPlayer from "../components/HlsPlayer";
import VideoPlayer from "../components/WebRTCStream";

const StreamPage = () => {
  return (
    <div>
      <HlsPlayer />
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default StreamPage;
