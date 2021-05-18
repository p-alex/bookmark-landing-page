import Image from "next/image";
import styles from "../styles/MobileNavBarMenu.module.css";
export default function MobileNavBarMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_container}>
        <Image
          src="/images/logo-bookmark-white.svg"
          width={148}
          height={25}
          alt="bookmark-logo-white"
        />
        <ul className={styles.links}>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Contanct</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <div className={styles.social_links}>
          <a href="/">
            <Image
              src="/images/icon-facebook.svg"
              width={25}
              height={25}
              alt="facebook-logo"
            />
          </a>
          <a href="/">
            <Image
              src="/images/icon-twitter.svg"
              width={28}
              height={25}
              alt="facebook-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
