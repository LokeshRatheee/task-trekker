import React from "react";
import styles from "@/styles/landingPage/desktop.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.leftnavbar}>
            <Image
              src="/landingPage/icon.svg"
              alt="Picture of the author"
              width={41}
              height={41}
              className={styles.logo}
            />
            <span className={styles.tododaily}>Todo Daily</span>
          </div>
          <div className={styles.rightnavbar}>
            <div className={styles.login}>
              <Link href="/app/components/pages/signin/signin" className={styles.textlinkLogin}>Login</Link>
              </div>
            <div className={styles.signup}>
            <Link href="/app/login/signUp" className={styles.textlinkSignup}>Signup</Link>
            </div>
          </div>
        </div>
        <div className={styles.hero}>
          <span className={styles.heroheading}>
            Organizing your day activity with Todo Daily
          </span>
          <div className={styles.bgImage}>
            <button className={styles.btnGetStarted}>Get started</button>
            <Image
                src="/landingPage/hero-section-img.png"
                alt="Picture of the author"
                width={480}
                height={100}
               className={styles.bgimg}
              />
          </div>
        </div>
        <div className={styles.stepSection}>
          <span className={styles.ssHeading}>
            Don’t let your day doing nothing
          </span>
          <div className={styles.ssIcons}>
            <div className={styles.smalltask}>
              <Image
                src="/landingPage/tasklisticon.svg"
                alt="Picture of the author"
                width={109}
                height={109}
                className={styles.ssicons}
              />
              <span className={styles.ssIconText}>Small task</span>
            </div>
            <div className={styles.noteicon}>
              <Image
                src="/landingPage/noteicon.svg"
                alt="Picture of the author"
                width={109}
                height={109}
                className={styles.ssicons}
              />
              <span className={styles.ssIconText}>Write it</span>
            </div>
            <div className={styles.dotit}>
              <Image
                src="/landingPage/doiticon.svg"
                alt="Picture of the author"
                width={109}
                height={109}
                className={styles.ssicons}
              />
              <span className={styles.ssIconText}>Do it</span>
            </div>
            <div className={styles.repeat}>
              <Image
                src="/landingPage/repeaticon.svg"
                alt="Picture of the author"
                width={109}
                height={109}
                className={styles.ssicons}
              />
              <span className={styles.ssIconText}>Repeat</span>
            </div>
          </div>
        </div>
        <div className={styles.getStartedSection}>
          <div className={styles.getStartedleft}>
            <Image
              src="/landingPage/getstartedimage.png"
              alt="Picture of the author"
              width={583}
              height={370}
              className={styles.getStartedSectionImg}
            />
          </div>
          <div className={styles.getStartedright}>
            <span className={styles.gsrightHeading}>
              Achieve your target and won your life
            </span>
            <button className={styles.getstartedbtn}>Get started</button>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.footerleftg1}>
              <Image
                src="/landingPage/icon.svg"
                alt="Picture of the author"
                width={56}
                height={56}
              />
              <p className={styles.habit}>
                Lets change your habit join with million people
              </p>
            </div>
            <p className={styles.company}>
              <span
                className={styles.companyName}
              >
                DK Tech Company{" "}
              </span>
              Uma Street, Lost City, Aincard{" "}
            </p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.group1}>
              <h6 className={styles.h6}>Features</h6>
              <ul className={styles.groupli}>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Sit</li>
                <li>Dolor</li>
              </ul>
            </div>
            <div className={styles.group2}>
              <h6 className={styles.h6}>Pricing</h6>
              <ul className={styles.groupli}>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Sit</li>
                <li>Dolor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
