import products from "../products.json";
import styles from "../styles/CardContainer.module.scss"

// interface IProductCard {
//   category: string;
//   filter: string;
// }

export const ProductCards = () => {
  // const { IProductCard } = props;
  // const filterProductCategoryName = [];
  const productsList = products.data.nodes;

  return (
    <div className={styles.productContainer}>
      <div className={styles.productCard}>
        {productsList.map((product, index) => {
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
