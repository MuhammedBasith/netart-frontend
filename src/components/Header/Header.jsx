import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="./logo.png" alt="CRI Fluid System Logo" />
    </div>
  );
}

export default Header;
