import React from "react";
import Image from "next/image";
import styles from "../iconButton/iconButton.module.css";
import Link from "next/link";

const IconButton = ({ src, width, height, alt, text ,href}) => {
  console.log(text)
  return (
    <>
    <Link href = {href} >
      <button className = {styles.buttonGoogle}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={styles.google}
      />
      
      <span className={styles.googletext}>{text}</span>
      </button>
      </Link>
    </>
  );
};
export default IconButton;
