import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";

const App = () => {
  const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

  return (
    <Router>
      <Navbar categories={categories} />
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} /> {/* Default to 'general' */}
        {categories.map((category) => (
          <Route key={category} path={`/${category}`} element={<NewsList category={category} />} />
        ))}
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
