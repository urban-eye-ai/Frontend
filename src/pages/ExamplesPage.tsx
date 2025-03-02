import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import rightArrowAnimation from "../assets/right_arrow.json"; // Your Lottie file

const ExamplesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Example Rows */}
      <div className="space-y-20 p-10">
        {[
          {
            leftImage: "/images/left-image-1.png",
            rightImage: "/images/right-image-1.png",
            altLeft: "Image 1",
            altRight: "Image 2",
          },
          {
            leftImage: "/images/left-image-2.png",
            rightImage: "/images/right-image-2.jpg",
            altLeft: "Image 3",
            altRight: "Image 4",
          },
          {
            leftImage: "https://via.placeholder.com/400",
            rightImage: "https://via.placeholder.com/400",
            altLeft: "Image 5",
            altRight: "Image 6",
          },
          {
            leftImage: "https://via.placeholder.com/400",
            rightImage: "https://via.placeholder.com/400",
            altLeft: "Image 7",
            altRight: "Image 8",
          },
          {
            leftImage: "https://via.placeholder.com/400",
            rightImage: "https://via.placeholder.com/400",
            altLeft: "Image 9",
            altRight: "Image 10",
          },
        ].map((row, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Left Image */}
            <motion.div
              className="w-1/2 pr-8"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
            >
              <img
                src={row.leftImage}
                alt={row.altLeft}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Arrow Animation */}
            <motion.div
              className="w-56 h-56 mx-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Lottie
                animationData={rightArrowAnimation}
                loop={true}
                className="w-full h-full"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="w-1/2 pl-8"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.6 }}
            >
              <img
                src={row.rightImage}
                alt={row.altRight}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExamplesPage;
