import styles from "./navbar.module.css";
import Image from "next/image";
import logoIcon from "public/images/logo.svg";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Image src={logoIcon} alt="logo" />
      <div className={styles.menu}>
        <span className={styles.active}>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
