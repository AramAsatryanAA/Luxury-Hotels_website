"use client";

import { idOfSectionToScroll } from "@/store/store";
import { MdKeyboardArrowDown } from "react-icons/md";

import styles from "./BtnScroll.module.css";

export default function BtnScroll() {
  function scrollToSection() {
    document.getElementById(idOfSectionToScroll).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <button
      aria-label="Scroll To"
      className={styles.button}
      onClick={() => scrollToSection()}
    >
      <MdKeyboardArrowDown />
    </button>
  );
}
