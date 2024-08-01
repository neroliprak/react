import Product from "./Product";
import "../styles/products.css";
import { productsType } from "@/types/ProductsType";
import { PanierType } from "@/types/PanierType";

type Props = {
  products: productsType[];
  setPanier: (panier: PanierType) => void;
  panier: PanierType;
};

const Products = ({ products, panier, setPanier }: Props) => {
  return (
    <>
      <div className="products-wrap">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            panier={panier}
            setPanier={setPanier}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
