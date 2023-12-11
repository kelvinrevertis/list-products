import React from 'react';
import styles from '../styles/SearchProducts.module.scss';

export const SearchProducts = ({ setProductName }) => {
  return (
    <div className={styles.SearchProducts}>
      <input
        type="text"
        placeholder="BUSQUE AQUI"
        onChange={(e) => setProductName(e.target.value)}
        className={styles.SearchInput}
      />

    </div>
  );
};

