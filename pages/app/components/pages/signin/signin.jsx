import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../signin/signin.module.css";
import HeaderWithLogo from "../../organisms/HeaderWithLogo/HeaderWithLogo";
import SignupButton from "../../organisms/signupButton/signupButton";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { getSession } from "next-auth/react";

const Signin = () => {
  // const router = useRouter();

  const router = useRouter();
  const [footer, setFooter] = useState(null);

  const { data: session } = useSession();
  // console.log(session);

  useEffect(() => {
    if (router.isReady && router.query.prop) {
      // Save the value to localStorage when the prop is available
      localStorage.setItem("footer", router.query.prop);
    }

    // Retrieve the value from localStorage or use a default value
    const storedFooter = localStorage.getItem("footer") || "default-value";
    setFooter(storedFooter);
  }, [router.isReady, router.query.prop]);

  // console.log(footer);

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
            auth="google"
            // href = {"/app/daily/daily"}
            href={
              session === undefined || session === null
                ? "/signin"
                : "/app/daily/daily"
            }
          />
          <SignupButton
            src="/signIN/mdi_github.png"
            height="21"
            width="21"
            alt="rr"
            text="Continue using Github"
            auth="github"
            // href = {"/app/daily/daily"}
            href={
              session === undefined || session === null
                ? "/signin"
                : "/app/daily/daily"
            }
          />
        </div>
        <hr className={styles.divider} />

        {footer === "signin" && (
          <div className={styles.footer}>
            Not have an account ?{" "}
            <Link href="signin?prop=signup" passHref as="signup">
              <span className={styles.footerSign}>Signup</span>
            </Link>
          </div>
        )}
        {footer === "signup" && (
          <div className={styles.footer}>
            Already have an account ?{" "}
            <Link href="signin?prop=signin" passHref as="signin">
              <span className={styles.footerSign}>Signin</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Signin;
