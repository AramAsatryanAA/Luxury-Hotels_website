import Image from "next/image";
import Link from "next/link";

import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles["footer__container"]} container`}>
        <div className={styles.info}>
          <div className={styles["info__logo"]}>
            <Image
              src="/page_logo.svg"
              alt="Luxury Hotels Logo"
              width={100}
              height={100}
            />
          </div>
          <div className={styles["info__contacts"]}>
            <p>2 Caxton Street, London SW1H 0QW, UK</p>
            <p>+44 55 7777 9999</p>
            <p>luxury_hotel@gmail.com</p>
          </div>
        </div>
        <div className={styles["pages-links"]}>
          <Link href="#">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="#">Terms & Conditions</Link>
        </div>
        <div className={styles["social-links"]}>
          <div className={styles["social-links__icons"]}>
            <a
              aria-label="Go to the Facebook website"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrFacebookOption />
            </a>
            <a
              aria-label="Go to the Twitter website"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrTwitter />
            </a>
            <a
              aria-label="Go to the Instagram website"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram />
            </a>
          </div>
          <div className={styles["social-links__links"]}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.subscribe}>
          <p>Subscribe to our newsletter</p>
          <div className={styles["subscribe-email"]}>
            <input
              type="email"
              placeholder="Email Address"
              id="subscribe-email"
            ></input>
            <button className={styles["btn-subscribe"]}>OK</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
