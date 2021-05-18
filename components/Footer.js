import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_logoAndLinks}>
          <img
            className={styles.logo}
            src="/images/logo-bookmark-white.svg"
            alt="logo-bookmark"
          />
          <ul>
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <img src="/images/icon-facebook.svg" alt="facebook" />
          <img src="/images/icon-twitter.svg" alt="twitter" />
        </div>
      </div>
      <div className={styles.credit}>
        <small>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/solutions"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/p-alex"
            target="_blank"
            rel="noreferrer"
          >
            Alex Daniel
          </a>
          .
        </small>
      </div>
    </footer>
  );
}
