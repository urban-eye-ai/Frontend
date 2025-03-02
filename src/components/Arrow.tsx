import React from "react";
import Lottie from "lottie-react";
import securityCameraAnimation from "../assets/security-camera.json"; // Your Lottie file

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white transition-opacity duration-700">
      {/* Lottie Animation */}
      <Lottie 
        animationData={securityCameraAnimation} 
        loop={true} 
        className="w-56 h-56" // Increased size slightly
      />
    </div>
  );
};

export default Loader;
