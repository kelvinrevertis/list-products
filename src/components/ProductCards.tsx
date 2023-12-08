import products from "../products.json";
import styles from "../styles/ProductCards.module.scss";

// interface IProductCard {
//   category: string;
//   filter: string;
// }

export const ProductCards = ({selectedCategories}) => {
  // const { IProductCard } = props;
  // const filterProductCategoryName = [];
  const productsList = products.data.nodes;

  const filteredProducts = selectedCategories.length
    ? productsList.filter((product) =>
        selectedCategories.includes(product.category.name)
      )
    : productsList;

  return (
    <div className={styles.productContainer}>
      <p>
        <strong>{productsList.length}</strong> Resultados
      </p>
      <hr />
      <div className={styles.productCard}>
        {filteredProducts.map((product, index) => {
          return (
            <div key={index} className={styles.productItem}>
              <img src={product.images[0].asset.url} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.shortDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
