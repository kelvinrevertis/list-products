import products from "../products.json";
import styles from "../styles/ProductCards.module.scss";

export const ProductCards = ({ selectedCategories, productName }) => {
  const productsList = products.data.nodes;

  const filteredProducts = productsList.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category.name);
    const matchesProductName = productName.trim() === '' || product.name.toLowerCase().includes(productName.toLowerCase());
    return matchesCategory && matchesProductName;
  });

  return (
    <div className={styles.productContainer}>
      <p>
        <strong>{filteredProducts.length}</strong> Resultados
      </p>
      <hr />
      <div className={styles.productCard}>
        {filteredProducts.map((product, index) => (
          <div key={index} className={styles.productItem}>
            <img src={product.images[0].asset.url} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

