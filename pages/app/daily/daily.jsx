import React from "react";
import styles from "@/styles/daily/daily.module.css";
import Image from "next/image";
import Today from "./today/today";
export default function Daily() {
  return (
    <>
      <div className={styles.appbar}>
        <div className={styles.leftappbar}>
          <Image
            src="/landingPage/icon.svg"
            alt="Picture of the author"
            width={41}
            height={41}
            className={styles.logo}
          />
          <span className={styles.tododaily}>Todo Daily</span>
        </div>
        <div className={styles.rightappbar}>
          <span className={styles.username}>James</span>
          <Image
            src="/daily/Ellipse 1.png"
            alt="Picture of the author"
            width={55}
            height={55}
            className={styles.usericon}
          />
        </div>
      </div>



      {/* after click sidebar */}
      <div className={styles.xyz}>
                      {/* before click sidebar */}

      <div className={styles.beforeSideBar}>
        <i className={`fa-solid fa-bars ${styles.baricon}`}></i>
      </div>
      <div className={styles.afterClickSideBar}>
        <div className={styles.todaydiv}>
          <Image
            src="/daily/ion_calendar-clear.png"
            alt="Picture of the author"
            width={29}
            height={29}
            className={styles.calendericon1}
          />
          <span className={styles.today}>Today</span>
        </div>
        <div className={styles.yesterdaydiv}>
          <Image
            src="/daily/ion_calendar-number.png"
            alt="Picture of the author"
            width={29}
            height={29}
            className={styles.calendericon2}
          />
          <span className={styles.yesterday}>Yesterday</span>
        </div>
        <div className={styles.upcomingdiv}>
          <Image
            src="/daily/ion_calendar-number.png"
            alt="Picture of the author"
            width={29}
            height={29}
            className={styles.calendericon3}
          />
          <span className={styles.upcoming}>Upcoming</span>
        </div>

      </div>
      </div>



      <div className={styles.anothercomponent}>{<Today />}</div>
    </>
  );
}
