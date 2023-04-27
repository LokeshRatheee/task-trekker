import React from "react";
import Image from "next/image";
import styles from "./image.module.css"

const ImageWithAlt = ({ src, width, height, alt}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={styles.logo}
  />
);

export default ImageWithAlt;
