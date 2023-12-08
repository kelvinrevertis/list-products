import React from 'react';
import products from '../products.json';
import styles from '../styles/SidebarFilter.module.scss';

export const SidebarFilter = ({ setSelectedCategories }) => {
  const productsList = products.data.nodes;
  const categories = new Set(productsList.map((product) => product.category.name));
  const uniqueCategories = Array.from(categories);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      const updatedCategories = prevCategories ? [...prevCategories] : [];
      const index = updatedCategories.indexOf(category);

      if (index !== -1) {
        updatedCategories.splice(index, 1);
      } else {
        updatedCategories.push(category);
      }

      return updatedCategories;
    });
  };

  return (
    <div className={styles.ProductFilter}>
      <div className={styles.containerFilter}>
        <p>Filtros</p>
      </div>

      <div className={styles.containerOptions}>
        {uniqueCategories.map((category, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={category}
                onClick={() => handleCategoryChange(category)}
              />
              <label> {category}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
