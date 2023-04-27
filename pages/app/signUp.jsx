import React from "react";
import styles from "@/styles/signIN/signin.module.css";
import Image from "next/image";
import Link from "next/link";
export default function SignIN() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.header}>
          <Image
            src="/landingPage/icon.svg"
            alt="Picture of the author"
            width={41}
            height={41}
            className={styles.logo}
          />
          <span className={styles.tododaily}>Todo Daily</span>
        </div>
        <span className={styles.signin}>Signin</span>
        <div className={styles.signButtons}>
          <Link href="/app/daily/daily">
            <button className={styles.buttonGoogle}>
              <Image
                src="/signIN/flat-color-icons_google.png"
                alt="Picture of the author"
                width={22}
                height={22}
                className={styles.google}
              />
              <span className={styles.googletext}>Continue using Google</span>
            </button>
          </Link>
          <Link href="/app/daily/daily">
            <button className={styles.buttonGoogle}>
              <Image
                src="/signIN/mdi_github.png"
                alt="Picture of the author"
                width={22}
                height={22}
                className={styles.google}
              />
              <span className={styles.googletext}>Continue using Github</span>
            </button>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.footer}>
          Not have account ? <span className={styles.footerSign}>Signup</span>
        </div>
      </div>
    </>
  );
}
