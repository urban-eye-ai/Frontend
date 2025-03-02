import React, { useState } from "react";
import { motion } from "framer-motion";

const TryoutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);
    setResult(null);
    setProcessedImage(null);

    const formData = new FormData();
    formData.append("image", image); // ✅ Ensure the field matches the Flask API

    try {
      const response = await fetch("http://localhost:5000/detect", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);

      if (data.success) {
        setResult(`Detected ${data.detection_count} objects in ${data.inference_time}`);
        setProcessedImage(data.result_url); // ✅ Use result_url for the processed image
      } else {
        setResult("Detection failed: " + data.error);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setResult("Error processing image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Light Effect */}
      <motion.div
        className="absolute inset-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"
        animate={{ x: mousePosition.x - 100, y: mousePosition.y - 100 }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Upload Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-5">
        <motion.h1
          className="text-5xl font-bold text-blue-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Try Out Urban Eye AI
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Upload an image and let AI analyze it in real-time.
        </motion.p>

        {/* File Upload Input */}
        <input
          type="file"
          accept="image/*"
          className="mt-4 p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"
          onChange={handleImageChange}
        />

        {/* Upload Button */}
        <motion.button
          className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-semibold transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Processing..." : "Upload & Analyze"}
        </motion.button>

        {/* Detection Results */}
        {result && (
          <motion.div
            className="mt-6 p-4 bg-gray-800 border border-gray-600 rounded-lg max-w-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-semibold">Result:</h3>
            <p className="mt-2">{result}</p>
          </motion.div>
        )}

        {/* Display Processed Image */}
        {processedImage && (
          <motion.img
            src={processedImage}
            alt="Processed Result"
            className="mt-6 max-w-lg rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
      </section>
    </div>
  );
};

export default TryoutPage;
