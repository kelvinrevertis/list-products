import { useState } from "react";
import { ProductCards } from "../components/ProductCards";
import { SidebarFilter } from "../components/SidebarFilter";
import { SearchProducts } from "../components/SearchProducts";

export const ProductsHome = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productName, setProductName] = useState("");

  return (
    <div>
      <h1>
        O QUE VOCÊ <span>ESTÁ PROCURANDO?</span>
      </h1>
      <SearchProducts setProductName={setProductName} />
      {console.log(productName)}
      <SidebarFilter setSelectedCategories={setSelectedCategories} />
      <ProductCards selectedCategories={selectedCategories} productName={productName} setProductName={setProductName} />
    </div>
  );
};
