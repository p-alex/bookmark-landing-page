import Image from "next/image";
import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/images/logo-bookmark.svg"
        width={148}
        height={25}
        alt="bookmark-logo"
      />
      <ul className={styles.navbar_links}>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
}
