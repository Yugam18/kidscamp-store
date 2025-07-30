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
      <div className={styles.mainContent}>
        {/* Left Section - Three Columns */}
        <div className={styles.leftSection}>
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
              <p className={styles.text}>Mon—Fri: 10am—6pm Eastern</p>
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
        </div>

        {/* Vertical Separator */}
        <div className={styles.separator}></div>

        {/* Right Section - Mailing List & App Download */}
        <div className={styles.rightSection}>
          <section className={styles.mailingList} aria-labelledby="newsletter-heading">
            <h2 className={styles.heading} id="newsletter-heading">JOIN OUR MAILING LIST</h2>
            <p className={styles.text}>
              Fresh arrivals, new and new-to-you brands, and expert edits. Basically, a bundle of joy in email form.
            </p>
            <form className={styles.subscribe} aria-label="Newsletter Signup">
              <label htmlFor="newsletter-email" className="visually-hidden">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Enter your email" />
              <button type="submit" aria-label="Subscribe to newsletter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </section>

          <section className={styles.appDownload} aria-labelledby="app-heading">
            <h2 className={styles.heading} id="app-heading">DOWNLOAD THE APP</h2>
            <p className={styles.text}>
              Download our official app from the app store
            </p>
            <button className={styles.appStoreButton}>
              <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span>Download on the App Store</span>
            </button>
          </section>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Kids Camp</p>
      </div>
    </footer>
  );
}
