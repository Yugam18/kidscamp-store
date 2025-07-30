import styles from './Nav.module.scss';
import Link from 'next/link';

const NAV_ITEMS = [
  { title: 'SALE', href: '/sale' },
  { title: 'NEW IN', href: '/new-in' },
  { title: 'BABY', href: '/baby' },
  { title: 'BOY', href: '/boy' },
  { title: 'GIRL', href: '/girl' },
  { title: 'ACCESSORIES', href: '/accessories' },
  { title: 'BRANDS', href: '/brands' },
  { title: 'STORE', href: '/store' },
  { title: 'EXPLORE LITTLE TAGS', href: '/explore' },
];

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {NAV_ITEMS.map((item) => (
          <li key={item.title} className={styles.menuItem}>
            <Link
              href={item.href}
              className={styles.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
