import { useDispatch, useSelector } from "react-redux";
import { testimonialsActions } from "@/store/testimonials-slice";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import styles from "./TestimonialsSection.module.css";

function TestimonialsSection() {
  const currentItem = useSelector((state) => state.testimonials.itemToShow);

  const dispatch = useDispatch();

  function showNextItemHandler() {
    dispatch(testimonialsActions.showNextItem());
  }

  function showPreviousItemHandler() {
    dispatch(testimonialsActions.showPreviousItem());
  }

  return (
    <section className={styles["section-testimonials"]}>
      <div className={`${styles["section__container"]} container`}>
        <div className={styles.title}>Testimonials</div>
        <div className={styles.item}>
          <div className={styles["item__comment"]}>
            &quot;{currentItem.title}&quot;
          </div>
          <div className={styles["item__author"]}>{currentItem.author}</div>
        </div>
        <div className={styles.actions}>
          <button aria-label="Button Left" onClick={showPreviousItemHandler}>
            <MdKeyboardArrowLeft />
          </button>
          <button aria-label="Button Right" onClick={showNextItemHandler}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
