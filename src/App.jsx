import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import DetailedProjectDetails from "./components/DetailedProjectCard/DetailedProjectDetails";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Loader from "./components/Loader/Loader";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    return <Loader />;
  }

  return (
    <Router>
      <div className="app-wrapper">
        {loading ? (
          <Loader />
        ) : (
          <>
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
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
