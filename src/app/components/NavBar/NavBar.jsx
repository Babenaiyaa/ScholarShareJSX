import Link from 'next/link';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link href="/">
          ScholarShare
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/review">Review</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="../Dashboard">Dashboard</Link>
        </li>
      </ul>
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
    </nav>
  );
}

export default NavBar;