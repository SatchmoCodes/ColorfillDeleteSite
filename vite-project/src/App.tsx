import { useState } from "react";
import "./App.css";

function App() {
  const [userId, setUserId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace this with your backend or Firebase function endpoint
    // Example:
    // await fetch("https://your-cloud-function-url/deleteUser", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ userId }),
    // });

    console.log("Request submitted for:", userId);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>ColorFill – Account Deletion Request</h1>

      <p>
        If you previously created an account in the ColorFill app, you may
        request permanent deletion of your data and profile. Deletion is
        irreversible and removes all stored information associated with your
        account.
      </p>

      {/* <h2>Request Data Deletion</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          <label>Your User ID or Email</label>
          <input
            type="text"
            required
            placeholder="Enter your user ID or email"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <button type="submit">Submit Deletion Request</button>
        </form>
      ) : (
        <div className="success">
          <h3>Request Submitted</h3>
          <p>
            Your deletion request has been received. Your data will be deleted
            within **30 days**.
          </p>
        </div>
      )}

      <h2>Alternative Method</h2> */}
      {/* <p>
        You can also email us directly at:{" "}
        <a href="mailto:your-support-email@example.com">
          your-support-email@example.com
        </a>{" "}
        with the subject <b>“ColorFill Account Deletion Request”</b>.
      </p> */}
      <p>
        Email us directly at:{" "}
        <a href="mailto:your-support-email@example.com">
          colorfillgames@outlook.com
        </a>{" "}
        with the subject <b>“ColorFill Account Deletion Request”</b>
      </p>

      <footer>{new Date().getFullYear()} ColorFill Online</footer>
    </div>
  );
}

export default App;
