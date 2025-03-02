import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import rightArrowAnimation from "../assets/right_arrow.json"; // Your Lottie file

const ExamplesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden p-10">
      <motion.div
        className="absolute inset-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"
        animate={{ x: 100, y: 100 }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />
      <div className="max-w-6xl mx-auto bg-gray-800/80 shadow-xl rounded-2xl p-10 backdrop-blur-lg border border-gray-700 relative z-10">
        <h1 className="text-3xl font-bold text-blue-400 mb-10 text-center">Example Demonstrations</h1>
        {[
          {
            leftImage: "/images/left-image-1.png",
            rightImage: "/images/right-image-1.png",
            altLeft: "Image 1",
            altRight: "Image 2",
          },
          {
            leftImage: "/images/left-image-3.jpg",
            rightImage: "/images/right-image-3.jpg",
            altLeft: "Image 5",
            altRight: "Image 6",
          },
          {
            leftImage: "/images/left-image-2.png",
            rightImage: "/images/right-image-2.jpg",
            altLeft: "Image 3",
            altRight: "Image 4",
          },
        ].map((row, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-1/2 pr-8"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
            >
              <img
                src={row.leftImage}
                alt={row.altLeft}
                className="w-full h-auto rounded-lg shadow-lg border border-gray-700"
              />
            </motion.div>

            <motion.div
              className="w-40 h-40 mx-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Lottie animationData={rightArrowAnimation} loop={true} className="w-full h-full" />
            </motion.div>

            <motion.div
              className="w-1/2 pl-8"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.6 }}
            >
              <img
                src={row.rightImage}
                alt={row.altRight}
                className="w-full h-auto rounded-lg shadow-lg border border-gray-700"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExamplesPage;
