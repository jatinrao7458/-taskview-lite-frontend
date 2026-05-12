import Navbar from "./components/Navbar";
// TODO:
// Import:
// BrowserRouter, Routes, Route from react-router-dom
// Home from ./pages/Home
// Tasks from ./pages/Tasks
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import React from "react";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;
