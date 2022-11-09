import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Query from "./components/Query";

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/query" element={<Query/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
