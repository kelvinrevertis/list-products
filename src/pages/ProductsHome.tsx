import { useState } from "react";
import { ProductCards } from "../components/ProductCards";
import { SidebarFilter } from "../components/SidebarFilter";
import { SearchProducts } from "../components/SearchProducts";
import styles from "../styles/ProductsHome.module.scss";

export const ProductsHome = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productName, setProductName] = useState("");

  return (
    <div className={styles.container}>
      <h1>
        O QUE VOCÊ <span>ESTÁ PROCURANDO?</span>
      </h1>
      <div className={styles.search}>
        <SearchProducts setProductName={setProductName} />
      </div>
      <div className={styles["main-content"]}>
        <div className={styles.sidebar}>
          <SidebarFilter setSelectedCategories={setSelectedCategories} />
        </div>
        <div className={styles["product-cards"]}>
          <ProductCards selectedCategories={selectedCategories} productName={productName} setProductName={setProductName} />
        </div>
      </div>
    </div>
  );
};
