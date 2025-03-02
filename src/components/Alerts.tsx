import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const TrafficAlerts = () => {
  const [trafficAlerts, setTrafficAlerts] = useState([]);
  const [garbageAlerts, setGarbageAlerts] = useState([]);
  const [crowdAlerts, setCrowdAlerts] = useState([]);

  useEffect(() => {
    const socket = io("ws://localhost:8080");

    socket.on('traffic_alerts', (msg) => {
      console.log('Traffic Alert received:', msg);
      setTrafficAlerts(prevAlerts => [...prevAlerts, msg]);
    });

    socket.on('garbage_alerts', (msg) => {
      console.log('Garbage Alert received:', msg);
      setGarbageAlerts(prevAlerts => [...prevAlerts, msg]);
    });

    socket.on('crowd_alerts', (msg) => {
      console.log('Crowd Alert received:', msg);
      setCrowdAlerts(prevAlerts => [...prevAlerts, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Real-Time Alerts</h1>
        
        <AlertSection title="Traffic Alerts" alerts={trafficAlerts} color="text-red-600" />
        <AlertSection title="Garbage Alerts" alerts={garbageAlerts} color="text-green-600" />
        <AlertSection title="Crowd Alerts" alerts={crowdAlerts} color="text-blue-600" />
      </div>
    </div>
  );
};

const AlertSection = ({ title, alerts, color }) => (
  <div className="mb-6">
    <h2 className={`text-xl font-semibold ${color} mb-2`}>{title}</h2>
    <ul className="bg-gray-50 border rounded-lg p-4 space-y-2">
      {alerts.length === 0 ? (
        <li className="text-gray-500">No alerts yet</li>
      ) : (
        alerts.map((alert, index) => (
          <li key={index} className="bg-white p-2 shadow rounded-lg">
            {JSON.stringify(alert)}
          </li>
        ))
      )}
    </ul>
  </div>
);

export default TrafficAlerts;