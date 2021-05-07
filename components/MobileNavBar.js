import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/MobileNavBar.module.css";
import MobileNavBarMenu from "./MobileNavBarMenu";
export default function MobileNavBar() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  return (
    <nav className={styles.navbar}>
      {toggle ? <MobileNavBarMenu /> : null}
      <div className={toggle ? styles.logo + " " + styles.hide : styles.logo}>
        <Image
          src={"/images/logo-bookmark.svg"}
          width={148}
          height={25}
          alt="bookmark-logo"
        />
      </div>
      <div
        className={
          toggle
            ? styles.hamburger_container + " " + styles.open
            : styles.hamburger_container
        }
        onClick={() => setToggle(!toggle)}
      >
        <span className={styles.hamburger}></span>
      </div>
    </nav>
  );
}
