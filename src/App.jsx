import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import DetailedProjectDetails from "./components/DetailedProjectCard/DetailedProjectDetails";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductsSection />
              </>
            }
          />
          <Route path="/projects" element={<ProductsSection />} />
          <Route path="/project/:id" element={<DetailedProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer /> {/* ✅ This will show the footer on all pages */}
      </div>
    </Router>
  );
}

export default App;
