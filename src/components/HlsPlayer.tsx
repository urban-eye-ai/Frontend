import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hls = new Hls({
      liveSyncDuration: 1,
      liveMaxLatencyDuration: 2,
      lowLatencyMode: true,
    });

    if (video && Hls.isSupported()) {
      hls.loadSource("http://localhost:8800/hls/index.m3u8");
      hls.attachMedia(video);
      hls.startPosition = -1;
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video?.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "http://localhost:8800/hls/index.m3u8";
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }

    return () => {
      hls.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"
        animate={{ x: "50%", y: "50%" }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      <section className="flex flex-col items-center text-center px-5 w-full max-w-5xl">
        {/* Title */}
        <motion.h1
          className="text-4xl mt-[100px] md:text-5xl font-bold text-blue-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Real-Time Surveillance Video
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Watch live feeds from surveillance cameras powered by Urban Eye AI, giving you the real-time insights you need to ensure safety and security.
        </motion.p>

        {/* Location */}
        <div className="mt-4 px-4 py-2 bg-gray-800/50 rounded-xl text-sm text-blue-400">
          Location: MKSSS's Cummins College of Engineering For Women
        </div>

        {/* Video Container */}
        <div className="mt-8 p-6 bg-gray-800/50 rounded-2xl shadow-lg backdrop-blur-xl w-full max-w-4xl">
          <video
            ref={videoRef}
            controls
            className="rounded-2xl w-full max-h-[500px] object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default VideoPlayer;
