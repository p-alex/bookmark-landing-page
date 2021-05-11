import Image from "next/image";
import React from "react";
import styles from "../styles/Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg_shape}></div>
      <div className={styles.hero_container}>
        <div className={styles.hero_image}>
          <Image
            src="/images/illustration-hero.svg"
            width={636}
            height={446}
            alt="hero-image"
          />
        </div>
        <div className={styles.hero_content}>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className={styles.hero_call_to_action}>
            <a href="#">Get it on Chrome</a>
            <a href="#">Get it on Firefox</a>
          </div>
        </div>
      </div>
    </section>
  );
}
