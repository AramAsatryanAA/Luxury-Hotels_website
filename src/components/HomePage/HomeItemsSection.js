import { useSelector } from "react-redux";
import Image from "next/image";
import { idOfSectionToScroll } from "@/store/store";
import styles from "./HomeItemsSection.module.css";

function HomeItemsSection() {
  const { items } = useSelector((state) => state.homeItemsSection);

  return (
    <section className={styles["section-items"]} id={idOfSectionToScroll}>
      <div className={`${styles["section__container"]} container`}>
        <h1 className={styles.title}>
          Free breakfast is included in all room types.
        </h1>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles["item__content"]}>
                <div className={styles["item__title"]}>{item.title}</div>
                <p className={styles["item__description"]}>
                  {item.description}
                </p>
                <button className={styles["item__btn"]}>{item.button}</button>
              </div>
              <div className={styles["item__img"]}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={830}
                  height={550}
                />
                <div className={styles["item__img-overlay"]}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeItemsSection;
