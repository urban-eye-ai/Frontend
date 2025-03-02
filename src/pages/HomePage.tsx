import React, { useState } from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Gradient Light Effect */}
      <motion.div
        className="absolute inset-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"
        animate={{ x: mousePosition.x - 100, y: mousePosition.y - 100 }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-5">
        <motion.h1
          className="text-5xl font-bold text-blue-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-5">Urban Eye AI</div>
          <div>Empowering Smarter Cities</div>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Harness the power of AI to ensure public safety with real-time surveillance.
          From detecting hazards to monitoring traffic flow, Urban Eye AI is here to keep
          your city safe, secure, and connected.
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-semibold transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="p-10 bg-gray-800/80">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          {[
            {
              title: "Real-Time Detection",
              desc: "Leverage AI to instantly detect and identify objects across the city. From pedestrians to vehicles, nothing escapes the eye of Urban Eye AI.",
            },
            {
              title: "Distortion Correction",
              desc: "Enhance image quality, even in adverse weather conditions. Our system corrects visual distortions for clearer, more accurate surveillance.",
            },
            {
              title: "Smart Alerts",
              desc: "Receive instant notifications based on detected threats or anomalies. Stay ahead with AI-driven insights and alerts delivered to your device.",
            },
            {
              title: "24/7 Monitoring",
              desc: "Urban Eye AI ensures non-stop surveillance, continuously analyzing live feeds to detect any unusual activity, anytime, anywhere.",
            },
            {
              title: "Automated Traffic Management",
              desc: "Monitor traffic flow and optimize congestion. With real-time analysis, Urban Eye AI can recommend traffic control measures to improve city efficiency.",
            },
            {
              title: "Public Safety Integration",
              desc: "Our system seamlessly integrates with emergency services, enhancing the safety of citizens by providing live updates and preemptive action.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl shadow-lg border border-gray-700 bg-gray-800/30 backdrop-blur-xl transition-transform duration-300"
              whileHover={{
                scale: 1.05,
                rotateX: (mousePosition.y / window.innerHeight - 0.5) * 20,
                rotateY: (mousePosition.x / window.innerWidth - 0.5) * 20,
              }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-xl font-semibold text-blue-400">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-r from-[#0077b6] to-[#89c2d9] text-center text-white">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your City's Safety, Powered by AI
        </motion.h2>
        <motion.p
          className="mt-4 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          With Urban Eye AI, your city's surveillance system becomes smarter, faster,
          and more secure. Our AI-powered solutions offer an unprecedented level of
          precision and reliability, giving you peace of mind around the clock.
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-white text-blue-600 hover:bg-gray-200 rounded-full text-lg font-semibold transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.button>
      </section>
    </div>
  );
};

export default HomePage;
