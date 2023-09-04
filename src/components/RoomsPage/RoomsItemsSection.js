"use client";

import { useSelector } from "react-redux";
import { idOfSectionToScroll } from "@/store/store";
import RoomsItem from "./RoomsItem";

import styles from "./RoomsItemsSection.module.css";

function RoomsItemsSection() {
  const { rooms } = useSelector((state) => state.roomsItemsSection);

  return (
    <section className={styles["section-items"]} id={idOfSectionToScroll}>
      <div className={`${styles["section__container"]} container`}>
        <h1 className={styles.title}>Rooms and rates</h1>
        <p className={styles.description}>
          Each of our bright, light-filled rooms has everything you need for a
          comfortable stay. And yes, comfort is not our only goal, we also
          appreciate good design, elegant modern furniture, complemented by the
          rich tones of the palette of nature, which are visible from the
          windows and terraces of our rooms overlooking the sea.
        </p>
        <ul className={styles.items}>
          {rooms.map((room) => (
            <RoomsItem key={room.id} {...room} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RoomsItemsSection;
