import React from "react";
import HlsPlayer from "../components/HlsPlayer";

const StreamPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <HlsPlayer />
    </div>
  );
};

export default StreamPage;
