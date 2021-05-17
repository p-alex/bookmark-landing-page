import { useState } from "react";
import styles from "../styles/Newsletter.module.css";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedBack] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.toLowerCase())) {
      setEmail("");
      setFeedBack("Thank you");
    } else {
      setEmail("");
      setFeedBack("Whoops, make sure it's an email");
    }
  };
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter_container}>
        <span>35,000+ ALREADY JOINED</span>
        <h1>Stay up-to-date with what we're doing</h1>
        <form onSubmit={handleSubmit}>
          <div
            className={styles.input_container}
            style={feedback ? { background: "#fc5e5f" } : null}
          >
            <input
              type="text"
              aria-label="email"
              placeholder="Enter your email here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {feedback !== "" ? <p>{feedback}</p> : null}
          </div>
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </section>
  );
}
