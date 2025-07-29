


import styles from './Header.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import Search from '../Search/Search';

const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Kids Camp Logo"
              width={100}
              height={50}
              className={styles.logoImg}
            />
            
          </Link>
        </div>
        <div className={styles.searchWrapper}>
          <Search />
        </div>
        <nav className={styles.navIcons}>
          <Link href="/signin" className={styles.signIn}>Sign In</Link>
          <button className={styles.iconBtn} aria-label="Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.icon}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.icon}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v9" />
            </svg>
          </button>
        </nav>
      </header>
    );
  };
  
  export default Header;