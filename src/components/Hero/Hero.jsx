import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

  const imgStyle ={
    borderRadius: '50%',
    width: '447px', /* adjust the size as needed */
    height: '459px', /* ensure height and width are equal for a perfect circle */
    objectFit: 'cover', /* ensures the image covers the circle area */
    overFlow: 'hidden'
}

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vignesh</h1>
        <p className={styles.description}>
          I'm a full-stack MERN developer with 1+ years of experience using React and
          NodeJS. Reach out if you'd like to know more!
        </p>
        <a href="mailto:vigneshrk13@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
      style={imgStyle}
        src={getImageUrl("hero/realhero.jpg")}
        alt="avatar image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
