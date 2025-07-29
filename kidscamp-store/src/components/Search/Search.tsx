

import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for anything"
        aria-label="Search"
      />
    </div>
  );
};

export default Search;
