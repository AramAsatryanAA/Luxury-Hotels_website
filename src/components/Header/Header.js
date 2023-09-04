"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

import styles from "./Header.module.css";

const navigationLinks = [
  { title: "Home", path: "/" },
  { title: "Facilities", path: "/facilities" },
  { title: "Rooms", path: "/rooms" },
  { title: "Contact us", path: "/contact" },
];

function Header() {
  const [mobileMode, setMobileMode] = useState(false);
  const currentPathName = usePathname();

  function hideNavigationMenu(event) {
    const link = event.target.closest("a");
    // --- Hide the navigation menu only if one of the navigation links was clicked
    if (!link) return;

    setMobileMode(false);
  }

  return (
    <header className={styles.header}>
      <div className={`${styles["header__container"]} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/page_logo.svg"
              alt="Page Logo"
              width={260}
              height={150}
            ></Image>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul
            className={
              mobileMode
                ? styles["navigation__links--mobile"]
                : styles["navigation__links"]
            }
            onClick={hideNavigationMenu}
          >
            {navigationLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className={`
              ${styles["navigation__link"]}
              ${
                currentPathName === link.path
                  ? styles["navigation__link--active"]
                  : ""
              }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <button
              className={`${styles["btn__navigation"]} ${styles["btn__navigation--close"]}`}
              onClick={() => setMobileMode(false)}
            >
              <CgClose />
            </button>
          </ul>
          <button
            aria-label="Open Menu"
            className={styles["btn__navigation"]}
            onClick={() => setMobileMode(true)}
          >
            <FiMenu />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
