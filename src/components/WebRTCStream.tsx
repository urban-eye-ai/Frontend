import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer/simplepeer.min.js";

const VideoStream = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [peer, setPeer] = useState<Peer.Instance | null>(null);
  const socket = useRef(io("ws://localhost:5005", { transports: ["websocket"] }));

  useEffect(() => {
    console.log("Connecting to WebRTC Server...");

    socket.current.on("connect", () => {
      console.log("WebSocket Connected:", socket.current.id);
    });

    socket.current.on("disconnect", () => {
      console.log("WebSocket Disconnected");
    });

    const startWebRTC = async () => {
      console.log("Starting WebRTC...");

      const newPeer = new Peer({ initiator: true, trickle: false });

      setPeer(newPeer);

      newPeer.on("signal", (offer) => {
        console.log("Sending WebRTC offer...");
        socket.current.emit("offer", { offer });
        console.log("Offer:", offer);
      });

      socket.current.on("answer", (data) => {
        console.log("Received WebRTC answer...");
        newPeer.signal(data.answer);
      });

      socket.current.on("icecandidate", (data) => {
        if (data?.candidate) {
          console.log("Received ICE Candidate...");
          newPeer.signal(data.candidate);
        }
      });
      

      newPeer.on("stream", (stream) => {
        console.log("Received video stream...");
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });

      newPeer.on("error", (err) => console.error("WebRTC Error:", err));
    };

    startWebRTC();

    return () => {
      console.log("Closing WebRTC connection...");
      setPeer((prevPeer) => {
        prevPeer?.destroy();
        return null;
      });
      socket.current.disconnect();
    };
  }, []);

  return <video ref={videoRef} autoPlay playsInline controls />;
};

export default VideoStream;
