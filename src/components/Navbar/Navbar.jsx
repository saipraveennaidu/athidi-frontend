import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import NavActions from "./components/NavActions";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavLinks />
      <NavActions />
    </nav>
  );
}

export default Navbar;