import React from "react";
import IconButton from "../../molecules/iconButton/IconButton";
import styles from "@/styles/signIN/signin.module.css";
import {signIn} from "next-auth/react";

const SignUpButton = ({ src, alt, width, height, text, href, auth }) => {

console.log("Auth",auth);
console.log("href" , href)
  return (
    <>
    
      <div className={styles.signButtons} onClick={() => signIn(auth)}>
        <IconButton
          src={src}
          alt={alt}
          width={width}
          height={height}
          text={text}
          href={href}
        />
      </div>
    </>
  );
};

export default SignUpButton;
