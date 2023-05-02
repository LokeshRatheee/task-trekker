import React, { useState } from "react";
import { useRouter } from "next/router";
// import styles from "@/styles/signIN/signin.module.css";
import styles from "../signin/signin.module.css";
import HeaderWithLogo from "../../organisms/HeaderWithLogo/HeaderWithLogo";
import SignupButton from "../../organisms/signupButton/signupButton";

const Signin = () => {
  const router = useRouter();
  console.log(router);
  const [footer, setfooter] = useState(router.query.prop);
  console.log(router.query.prop);

  return (
    <>
      <div className={styles.box}>
        <HeaderWithLogo
          appname="Todo Daily"
          src="/landingPage/icon.svg"
          alt="Picture of the author"
          width="41"
          height="41"
        />
        <span className={styles.signin}>{router.query.prop}</span>
        <div className={styles.signButtons}>
          <SignupButton
            src="/signIN/flat-color-icons_google.png"
            alt="tt"
            height="22"
            width="22"
            text="Continue using Google"
            href={"/app/daily/daily"}
          />
          <SignupButton
            src="/signIN/mdi_github.png"
            height="21"
            width="21"
            alt="rr"
            text="Continue using Github"
            href={"/app/daily/daily"}
          />
        </div>
        <hr className={styles.divider} />
    
        {footer === "signin" && (
          <div className={styles.footer}>
            Not have an account ? <span className={styles.footerSign}>Signup</span>
          </div>
        )}
        {
          footer === "signup" && (
            <div className = {styles.footer}>
              Already have an account ? <span className={styles.footerSign}>Signin</span>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Signin;
