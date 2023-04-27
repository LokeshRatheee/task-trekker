import React from "react";
// import styles from "@/styles/signIN/signin.module.css";
import styles from "../signin/signin.module.css"
import HeaderWithLogo from '../../organisms/HeaderWithLogo/HeaderWithLogo';
import SignupButton  from '../../organisms/signupButton/signupButton';


const Signin = () => {
  return (
    <>
    <div className = {styles.box}>
      <HeaderWithLogo
        appname="Todo Daily"
        src="/landingPage/icon.svg"
        alt="Picture of the author"
        width="41"
        height="41"
      />
       <span className= {styles.signin}>SignUp</span>
       <div className = {styles.signButtons}>
        <SignupButton src = "/signIN/flat-color-icons_google.png" alt = "tt" height = "22" width = "22" text = "Continue using Google" href = {"/app/daily/daily"} / >
        <SignupButton src = "/signIN/mdi_github.png" height = "21" width = "21" alt = "rr" text = "Continue using Github" href = {"/app/daily/daily"} />
        </div>
        <hr className={styles.divider} />
        <div className={styles.footer}>
          Not have account ? <span className={styles.footerSign}>Signup</span>
        </div>
        </div>
    </>
  );
};

export default Signin;
