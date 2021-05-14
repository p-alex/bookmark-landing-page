import { useState } from "react";
import styles from "../styles/FAQ.module.css";
export default function FAQ() {
  const faqs = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornaremattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquetconvallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact",
    },
  ];
  const [currentFaqToggle, setCurrentFaqToggle] = useState(
    "How can I request a new browser?"
  );
  const handleToggle = (question) => {
    if (question === currentFaqToggle) {
      setCurrentFaqToggle("");
    } else {
      setCurrentFaqToggle(question);
    }
  };
  return (
    <section className={styles.FAQ}>
      <div className={styles.FAQ_content}>
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <div className={styles.FAQs_container}>
        {faqs.map((faq) => (
          <div key={faq.question} className={styles.faq}>
            <div
              className={styles.faq_question}
              onClick={() => handleToggle(faq.question)}
            >
              <h3>{faq.question}</h3>
              <i
                className={
                  faq.question === currentFaqToggle
                    ? styles.arrow + " " + styles.up
                    : styles.arrow
                }
              ></i>
            </div>
            {faq.question === currentFaqToggle && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
