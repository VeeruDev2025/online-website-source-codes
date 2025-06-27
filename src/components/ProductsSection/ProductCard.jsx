import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Make sure this path is correct

const ProjectCard = ({ project }) => {
  const {
    id, // ✅ You forgot to extract this!
    title,
    description,
    price,
    rating,
    downloads,
    isBestSeller,
    driveFile,
    thumbnailVideo,
  } = project;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const paymentHandler = async (event) => {
    event.preventDefault();

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const amount = 500;
    const currency = "INR";
    const receiptId = "receipt_123";

    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, currency, receipt: receiptId }),
    });

    const order = await response.json();

    const options = {
      key: "rzp_test_iCXNe8xv19cC6l", // Replace with your Razorpay Test Key
      amount: order.amount,
      currency: order.currency,
      name: "Web Codder",
      description: "Test Transaction",
      image:
        "https://res.cloudinary.com/dqhk94co9/image/upload/v1747643080/ScreenShot_Tool_-20250519135156_ush76t.png",
      order_id: order.id,
      handler: async function (response) {
        const validateRes = await fetch("http://localhost:5000/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
        });

        const json = await validateRes.json();
        alert(json.message);
        console.log("✅ Payment verification:", json);
      },
      prefill: {
        name: "Web Coder",
        email: "webcoder@example.com",
        contact: "9000000000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert("Payment Failed: " + response.error.description);
    });

    rzp1.open();
  };

  return (
    <div className="project-card">
      <div className="product-thumbnail">
        {isBestSeller && <div className="badge">Best Seller</div>}
        {/* <img src={thumbnailVideo} alt={title} className="product-img"/> */}
        <iframe
          src={`https://www.youtube.com/embed/${
            thumbnailVideo.split("youtu.be/")[1]
          }?autoplay=1&mute=1&loop=1&playlist=${
            thumbnailVideo.split("youtu.be/")[1]
          }`}
          className="product-img"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
        ></iframe>

        <Link to={`/project/${id}`} className="view-btn" target="_blank">
          View Details →
          {/* <img
            src="https://res.cloudinary.com/dqhk94co9/image/upload/v1750848980/moving_fdiyod.png"
            alt="Arrow Right"
            className="arrow-icon"
          /> */}
        </Link>
      </div>

      <div className="project-content">
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="project-bottom">
          <div className="meta">
            <span className="rating">{rating}</span>
            <span className="downloads">{downloads}+ downloads</span>
          </div>

          <div className="price-bar">
            <div className="price">
              <strong>₹{price}</strong>
            </div>
            <button className="btn-primary" onClick={paymentHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#fde4e1"
                  d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
