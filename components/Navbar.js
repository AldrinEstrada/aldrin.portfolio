import styles from '@/styles/navbar.module.css'
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/projects">
        Projects
      </Link>

      <Link href="/about">
        About Me
      </Link>

      <Link href="/contact">
        Contact
      </Link>

      <Link href="./" rel="noreferrer">
        Home
      </Link>


    </nav>

  );
};

export default Navbar;
