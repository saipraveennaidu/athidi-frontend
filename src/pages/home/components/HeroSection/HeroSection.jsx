import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Find Your Perfect Stay</h1>

        <p>
          Discover PGs, rentals, short stays and properties—all in one place.
        </p>

        <button className={styles.cta}>
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;