import Image from "next/image";
import { MdOutlineCalendarMonth } from "react-icons/md";
import BtnScroll from "./BtnScroll";

import styles from "./TopSection.module.css";

function TopSection({ coverImage }) {
  return (
    <section className={styles["section-top"]}>
      <div className={styles["section__cover-img"]}>
        <Image src={coverImage} alt="Top Cover Img" fill priority />
      </div>
      <div className={styles["section__cover-overlay"]}></div>
      <div className={`${styles["section__container"]} container`}>
        <div className={styles.heading}>
          <p>Welcome to</p>
          <p>Luxury</p>
          <p>Hotels</p>
          <p>
            Book your stay and enjoy Luxury redefined at the most affordable
            prices.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles["actions__btn-book"]}>
            <MdOutlineCalendarMonth />
            <span className={styles["actions__text"]}>Book now</span>
          </button>
          <div className={styles["actions__scroll"]}>
            <span className={styles["actions__text"]}>Scroll</span>
            <BtnScroll />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
