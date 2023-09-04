import { useSelector } from "react-redux";
import { idOfSectionToScroll } from "@/store/store";
import Image from "next/image";

import styles from "./FacilitiesItemsSection.module.css";

function FacilitiesItemsSection() {
  const { facilities } = useSelector((state) => state.facilitiesItemsSection);

  return (
    <section className={styles["section-items"]} id={idOfSectionToScroll}>
      <div className={`${styles["section__container"]} container`}>
        <h1 className={styles.title}>Facilities</h1>
        <p className={styles.description}>
          We want your stay at our luxury hotel to be truly unforgettable.
          That&apos;s why we pay special attention to all your needs in order to
          provide you with a unique experience. Luxury hotels offer the perfect
          setting for a relaxing holiday with stunning views, while our
          state-of-the-art luxury resort facilities help you make the most of
          your experience.
        </p>
        <ul className={styles.items}>
          {facilities.map((facility) => (
            <li className={styles.item} key={facility.id}>
              <div className={styles["item__img"]}>
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={1400}
                  height={930}
                />
                <div className={styles["item__img-overlay"]}></div>
              </div>
              <div className={styles["item__title"]}>{facility.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FacilitiesItemsSection;
