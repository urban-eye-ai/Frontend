import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Loader from "../components/Loader"; // Import the Loader

const HomePageWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loader /> : <HomePage />;
};

export default HomePageWrapper;
