import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { motion } from "framer-motion";

const TrafficAlerts = () => {
  const [trafficAlerts, setTrafficAlerts] = useState([]);
  const [garbageAlerts, setGarbageAlerts] = useState([]);
  const [crowdAlerts, setCrowdAlerts] = useState([]);

  useEffect(() => {
    const socket = io("ws://localhost:8080");

    socket.on("traffic_alerts", (msg) => {
      console.log("Traffic Alert received:", msg);
      setTrafficAlerts((prevAlerts) => [...prevAlerts, msg]);
    });

    socket.on("garbage_alerts", (msg) => {
      console.log("Garbage Alert received:", msg);
      setGarbageAlerts((prevAlerts) => [...prevAlerts, msg]);
    });

    socket.on("crowd_alerts", (msg) => {
      console.log("Crowd Alert received:", msg);
      setCrowdAlerts((prevAlerts) => [...prevAlerts, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 w-96 h-96 bg-red-500/20 blur-[120px] rounded-full"
        animate={{ x: 100, y: 100 }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      <div className="max-w-4xl mx-auto bg-gray-800/80 shadow-lg rounded-2xl p-6 backdrop-blur-lg border border-gray-700 mt-20">
        <h1 className="text-3xl font-bold text-blue-400 mb-6 text-center">Real-Time Alerts</h1>

        <AlertSection title="Traffic Alerts" alerts={trafficAlerts} color="text-red-400" />
        <AlertSection title="Garbage Alerts" alerts={garbageAlerts} color="text-green-400" />
        <AlertSection title="Crowd Alerts" alerts={crowdAlerts} color="text-yellow-400" />
      </div>
    </div>
  );
};

const AlertSection = ({ title, alerts, color }) => (
  <div className="mb-6">
    <h2 className={`text-2xl font-semibold ${color} mb-2`}>{title}</h2>
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 space-y-2 shadow-lg">
      {alerts.length === 0 ? (
        <p className="text-gray-400">No alerts yet</p>
      ) : (
        alerts.map((alert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-3 shadow rounded-lg text-white border border-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {JSON.stringify(alert)}
          </motion.div>
        ))
      )}
    </div>
  </div>
);

export default TrafficAlerts;
