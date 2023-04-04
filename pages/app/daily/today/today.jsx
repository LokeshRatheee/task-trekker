import React from "react";
import styles from "@/styles/daily/today/today.module.css";
import Image from "next/image";
export default function Today() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.todaygroup}>
          <span className={styles.today}>Today</span>
          <div className={styles.tasks}>4/6 completed</div>
          <div className={styles.tasklist}>
            <ul>
              <li className={styles.list1}>
                <Image
                  src="/daily/checklist.png"
                  alt="Picture of the author"
                  width={26}
                  height={25}
                  className={styles.checkicon}
                />
                <div className={styles.frame}>
                  <div className={styles.leftside}>
                    <span className={styles.listheading}>
                      Cooking a salmon sushi
                    </span>
                    <p className={styles.listp}>
                      Salmon and tuna i think is good for dinner, i wanna make
                      it today :D
                    </p>
                  </div>
                  <div className={styles.rightsideicons}>
                    <Image
                      src="/daily/bi_pencil-square.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                    />
                    <Image
                      src="/daily/bi_three-dots.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                    />
                    <button className={styles.deletebtn}>
                      <Image
                        src="/daily/bi_trash-fill.png"
                        alt="Picture of the author"
                        width={26}
                        height={25}
                        className={styles.deleteicon}
                      />
                      <span className={styles.btndeletetext}>Delete</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
