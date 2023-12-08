import { useState } from "react"
import { ProductCards } from "../components/ProductCards"
import { SidebarFilter } from "../components/SidebarFilter"

export const ProductsHome = ()=>{
  const [selectedCategories, setSelectedCategories] = useState([]);
  return(
    <div>
      <h1>O QUE VOCÊ <span>ESTÁ PROCURANDO?</span></h1>
      {console.log(selectedCategories)}
      <SidebarFilter setSelectedCategories={setSelectedCategories} />
      <ProductCards selectedCategories={selectedCategories} />
    </div>
  )
}
