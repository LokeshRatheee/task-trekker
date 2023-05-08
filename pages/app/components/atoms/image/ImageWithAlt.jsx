import React from "react";
import Image from "next/image";
import styles from "./image.module.css";

// const ImageWithAlt = ({ src, width, height, alt }) => (
const ImageWithAlt = ({ ...props }) => (
  <Image
    // src={src}
    // alt={alt}
    // width={width}
    // height={height}
    {...props}
    className={styles.logo}
  />
);

export default ImageWithAlt;
