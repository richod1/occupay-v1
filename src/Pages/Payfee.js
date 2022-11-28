import "./index.css";

import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Payfee() {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [index, setIndex] = useState("");
  const [error, setError] = useState("");
  const [empty, setEmpty] = useState(false);

  const config = {
    public_key: "FLWPUBK-499e483347aa55674a906afea0356314-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "GH",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      inex_number:index,
      name: name,
    },
    customizations: {
      title: "Occupay Payment",
      description: "Payment for School fees.",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  //  handle error before payment
  const handleFlutterPayment = useFlutterwave(config);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === 0 || email === "" || name === "" || phone === "") {
      setEmpty(true);
      setError("Please fill all fields");
    } else {
      setEmpty(false);
      setError("");
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          closePaymentModal(); // this will close the modal programmatically
        },
        onClose: () => {},
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Occupay Payment</h1>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
       

          <label htmlFor="email">School Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="bcict21112@ttu.gh"
          />

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Degraft Frimpong"
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone"
          />
          <label htmlFor="phone">Index Number</label>
          <input
            type="text"
            id="index"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
            placeholder="bcict21112"
          />

          <button
            type="submit"
            className="btn"
            onClick={(e) => handleSubmit(e)}
          >
            Pay
          </button>

          {empty && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

// export default Payfee