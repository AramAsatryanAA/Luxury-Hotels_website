"use client";

import { useDispatch } from "react-redux";
import { roomsItemsActions } from "@/store/roomsItemsSection-slice";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

import styles from "./RoomsItem.module.css";

function RoomsItem({
  id,
  currentImageIndex,
  images,
  title,
  price,
  description,
}) {
  const dispatch = useDispatch();

  function changeImageHandler(event) {
    if (event.target.id === "") return;

    dispatch(roomsItemsActions.changeImage({ id: event.target.id }));
  }

  return (
    <li>
      <div className={styles["item__top"]}>
        <div className={styles["top__img-block"]}>
          <Image
            src={images[currentImageIndex]}
            alt={title}
            width={1550}
            height={970}
          />
          <div className={styles["top__img-overlay"]}></div>
          <div
            className={styles["top__img-navigation"]}
            onClick={changeImageHandler}
          >
            {images.map((_, i) => (
              <input
                key={i}
                type="radio"
                name="btn-navigation"
                id={`${id}__btn-${i}`}
                className={styles["btn-navigation"]}
              />
            ))}
          </div>
        </div>
        <div className={styles["top__title"]}>{title}</div>
      </div>
      <div className={styles["item__info"]}>
        <button className={styles["info__btn-view"]}>
          <AiOutlinePlus />
          <p>View room details</p>
        </button>
        <div
          className={styles["info__price"]}
        >{`$${price} ${description}`}</div>
      </div>
    </li>
  );
}

export default RoomsItem;
