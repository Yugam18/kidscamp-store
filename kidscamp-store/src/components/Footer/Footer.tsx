import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

const customerCareLinks = [
  { label: "Holiday Shipping", href: "#" },
  { label: "Shipping & Delivery", href: "#" },
  { label: "F.A.Q.s", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Returns Guide", href: "#" },
  { label: "Do Not Sell My Personal Info", href: "#" },
];

const companyLinks = [
  { label: "Careers", href: "#" },
  { label: "Partner With Us", href: "#" },
  { label: "Press", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Size Guide", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Become a Brand Ambassador", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#", iconClass: "icon-instagram" },
  { label: "Twitter", href: "#", iconClass: "icon-twitter" },
  { label: "Facebook", href: "#", iconClass: "icon-facebook" },
  { label: "Pinterest", href: "#", iconClass: "icon-pinterest" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.section} aria-label="Customer Care">
        <h2 className={styles.heading}>CUSTOMER CARE</h2>
        <ul className={styles.list}>
          {customerCareLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className={styles.section} aria-label="Company">
        <h2 className={styles.heading}>COMPANY</h2>
        <ul className={styles.list}>
          {companyLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>


      <section className={styles.section} aria-labelledby="contact-heading">
        <h2 className={styles.heading} id="contact-heading">CONTACT US</h2>
        <address>
          <p className={styles.text}>Mon—Fri: 10am–6pm Eastern</p>
          <p className={styles.text}>
            <a href="mailto:customercare@kidscamp.com">customercare@kidscamp.com</a>
          </p>
        </address>
        <div className={styles.social} aria-label="Social Media Links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label}>
              <i className={link.iconClass} />
            </a>
          ))}
        </div>
      </section>


      <section className={styles.section} aria-labelledby="newsletter-heading">
        <h2 className={styles.heading} id="newsletter-heading" style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>Newsletter Signup</h2>
        <p className={styles.text}>
          Fresh arrivals, new-to-you brands, and expert edits. Basically, a bundle of joy in email form.
        </p>
        <form className={styles.subscribe} aria-label="Newsletter Signup">
          <label htmlFor="newsletter-email" className="visually-hidden">Email address</label>
          <input id="newsletter-email" type="email" placeholder="Join our mailing list" />
          <button type="submit" aria-label="Subscribe to newsletter">→</button>
        </form>
      </section>

   
      <div className={styles.bottom}>
        <p>© 2025 Kids Camp</p>
      </div>
    </footer>
  );
}
