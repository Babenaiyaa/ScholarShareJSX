import Image from 'next/image';
import Link from 'next/link';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/logo.png"  // Ensure this path is correct
            alt="ScholarShare Logo" 
            width={250}  // Smaller logo size
            height={30}  
            priority 
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/login">Singup</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <svg className={styles.searchIcon} viewBox="0 0 24 24">
          <path
            d="M21.53 20.47l-4.8-4.8a8.5 8.5 0 10-1.06 1.06l4.8 4.8a.75.75 0 101.06-1.06zM10.5 17a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
          />
        </svg>
        <input
          type="search"
          placeholder="Search Bar"
          className={styles.searchInput}
        />
      </div>
    </nav>
  );
}

export default NavBar;
