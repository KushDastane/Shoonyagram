import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisionSection from "./components/VisionSection";
import PathwaysSection from "./components/PathwaysSection";
import TimelineSection from "./components/TimelineSection";
import Footer from "./components/Footer";

import YatraPage from "./pages/YatraPage";
import KulaPage from "./pages/KulaPage";
import JnanaPage from "./pages/JnanaPage";

const Home = () => (
  <main>
    <Hero />
    <VisionSection />
    <PathwaysSection />
    <TimelineSection />
  </main>
);

const App = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-heritage-primary/20 selection:text-heritage-primary">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pathways/yatra" element={<YatraPage />} />
        <Route path="/pathways/kula" element={<KulaPage />} />
        <Route path="/pathways/jnana" element={<JnanaPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
