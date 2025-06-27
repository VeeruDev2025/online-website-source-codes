import React, { useState } from "react";

function Rozorpay() {
  const [amount, setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount.");
      return;
    }

    const options = {
      key: "rzp_test_ffSb2yIkIflJH9",
      amount: amount * 100,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "For testing purpose",
      handler: function (response) {
        alert(
          "Payment Successful!\nPayment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Velmurugan",
        email: "mvel1620r@gmail.com",
        contact: "7904425033",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.on("payment.failed", function (response) {
      alert("Oops! Payment Failed:\n" + response.error.description);
    });

    razorpay.open();
  };

  return (
    <div className="App">
      <h2>Razorpay Payment Integration Using React</h2>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Rozorpay;
