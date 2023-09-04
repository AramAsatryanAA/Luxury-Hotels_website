import styles from "./ContactTopSection.module.css";

function ContactTopSection() {
  return (
    <section className={styles["section-top"]}>
      <div className="container">
        <h1 className={styles.title}>Contact-us</h1>
      </div>
    </section>
  );
}

export default ContactTopSection;
