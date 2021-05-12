import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Features.module.css";
export default function Features() {
  const options = [
    {
      title: "Bookmark in one click",
      body: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      imageWidth: 536,
      imageHeight: 346,
    },
    {
      title: "Speedy Searching",
      body: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      imageWidth: 478,
      imageHeight: 416,
    },
    {
      title: "Share your bookmarks",
      body: "Easily share your bookmarks and collections with others. Create a shareable link that can send at the click of a button.",
      imageWidth: 440,
      imageHeight: 380,
    },
  ];
  const [currentOption, setCurrentOption] = useState(0);
  const handleOptionChange = (option) => setCurrentOption(option);
  return (
    <section className={styles.features} id="features">
      <div className={styles.features_content}>
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <ul className={styles.features_options}>
        <li
          onClick={() => handleOptionChange(0)}
          className={currentOption === 0 ? styles.selected : null}
        >
          Simple Bookmarking
        </li>
        <li
          onClick={() => handleOptionChange(1)}
          className={currentOption === 1 ? styles.selected : null}
        >
          Speedy Searching
        </li>
        <li
          onClick={() => handleOptionChange(2)}
          className={currentOption === 2 ? styles.selected : null}
        >
          Easy Sharing
        </li>
      </ul>
      {options.map((option, id) => {
        if (id === currentOption)
          return (
            <div className={styles.features_option} key={id}>
              <div className={styles.bg_shape}></div>
              <div className={styles.features_option_container}>
                <div className={styles.features_image}>
                  <Image
                    src={`/images/illustration-features-tab-${id + 1}.svg`}
                    alt="illustration-features-tab-1"
                    width={option.imageWidth}
                    height={option.imageHeight}
                  />
                </div>
                <div className={styles.features_option_content}>
                  <h2>{option.title}</h2>
                  <p>{option.body}</p>
                  <a href="#">More Info</a>
                </div>
              </div>
            </div>
          );
      })}
    </section>
  );
}
