import Image from "next/image";
import styles from "../styles/Download.module.css";
export default function Download() {
  const cards = [
    {
      image: "logo-chrome.svg",
      title: "Add to Chrome",
      version: "Minimum version 62",
    },
    {
      image: "logo-firefox.svg",
      title: "Add to Firefox",
      version: "Minimum version 55",
    },
    {
      image: "logo-opera.svg",
      title: "Add to Opera",
      version: "Minimum version 46",
    },
  ];
  return (
    <section className={styles.download}>
      <div className={styles.content}>
        <h1>Download the extension</h1>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div className={styles.card} key={card.title}>
            <Image
              src={`/images/${card.image}`}
              width={100}
              height={102}
              alt={card.image}
            />
            <h2>{card.title}</h2>
            <p>{card.version}</p>
            <div
              className={styles.btn_container}
              style={{ backgroundImage: "url(/images/bg-dots.svg)" }}
            >
              <a href="#">Add & Install Extension</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
