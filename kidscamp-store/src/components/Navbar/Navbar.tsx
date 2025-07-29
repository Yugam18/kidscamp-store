import styles from './Nav.module.scss';
import Link from 'next/link';

const NAV_ITEMS = [
  { title: 'Sale', href: '/sale' },
  {
    title: 'Back to School',
    dropdown: [
      { title: 'Backpacks for School', href: '/backpacks' },
      { title: 'Back-to-School Clothes for Girls', href: '/girls-clothes' },
      { title: 'Back-to-School Clothes for Boys', href: '/boys-clothes' },
      { title: 'Lunchtime', href: '/lunch' },
      { title: 'Water Bottles', href: '/water-bottles' },
      { title: 'Accessories & Supplies', href: '/accessories' },
      { title: 'Shoes', href: '/shoes' },
      { title: 'Study Nook', href: '/study-nook' },
      { title: 'View All', href: '/back-to-school' },
    ],
  },
  { title: 'Dress Shop', href: '/dresses' },
  { title: 'New & Popular', href: '/new' },
  { title: 'Baby', href: '/baby' },
  { title: 'Kids', href: '/kids' },
];

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      {/* Mobile Toggle */}
      <input type="checkbox" id="menu-toggle" className={styles.toggleCheckbox} />
      <label htmlFor="menu-toggle" className={styles.hamburger}>
        ☰
      </label>

      <ul className={styles.menu}>
        {NAV_ITEMS.map((item) => (
          <li key={item.title} className={styles.menuItem}>
            <Link href={item.href || '#'} className={styles.link}>
              {item.title}
            </Link>
            {item.dropdown && (
              <ul className={styles.dropdown}>
                {item.dropdown.map((subItem) => (
                  <li key={subItem.title}>
                    <Link href={subItem.href} className={styles.dropdownItem}>
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
