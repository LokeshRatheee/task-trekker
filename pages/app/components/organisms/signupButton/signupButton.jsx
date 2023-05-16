import React from "react";
import IconButton from "../../molecules/iconButton/IconButton";
import styles from "@/styles/signIN/signin.module.css";

const SignUpButton = ({src ,alt,width,height,text,href}) => {
  console.log(src);
  return (
    <>
      <div className={styles.signButtons}>
        <IconButton src = {src} alt = {alt} width = {width} height = {height} text = {text} href = {href} />
        
      </div>
    </>
  );
};

export default SignUpButton;
