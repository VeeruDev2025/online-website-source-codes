import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-circle">
        <img
          src="https://res.cloudinary.com/dqhk94co9/image/upload/v1750929526/loading_nc8vjd.png"
          alt="loading"
          className="loader-icon"
        />
      </div>
    </div>
  );
};

export default Loader;
