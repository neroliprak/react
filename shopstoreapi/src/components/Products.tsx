import "../styles/produits.css";

import Product from "@/components/Product";

const Products = ({ produits, setPaniers, paniers }) => {
  return (
    <>
      <div className="produits">
        {produits.map((produit) => (
          <Product
            key={produit.product_id}
            produit={produit}
            setPaniers={setPaniers}
            paniers={paniers}
          />
        ))}
      </div>
    </>
  );
};
export default Products;
