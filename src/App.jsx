import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StreamPage from "./pages/StreamPage";
import TryoutPage from "./pages/TryoutPage";
import AlertsPage from "./pages/AlertsPage";
import ExamplesPage from "./pages/ExamplesPage";
import { Navbar } from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stream" element={<StreamPage />} />
        <Route path="/tryout" element={<TryoutPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/examples" element={<ExamplesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
