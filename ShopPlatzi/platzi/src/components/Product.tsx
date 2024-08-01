import { productsType } from "@/types/ProductsType";
import "../styles/product.css";
import { PanierType } from "@/types/PanierType";
import { useState } from "react";
import Link from "next/link";

type Props = {
  product: productsType;
  setPanier: (panier: PanierType) => void;
  panier: PanierType;
};

const Product = ({
  product: { images, title, description, price, category, id },
  panier,
  setPanier,
}: Props) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  const handleClick = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  const addPanier = () => {
    // Je créer un nouveau panier en reprenant l'ancien, car sinon ça ne se met pas à jour
    const nouveauPanier = { ...panier };
    // Si je ne trouve pas le produit dans mon panier, c'est qu'il faut l'ajouter
    if (nouveauPanier[id] === undefined) {
      nouveauPanier[id] = 0;
    }
    nouveauPanier[id] += 1;
    setPanier(nouveauPanier);
  };

  const deletePanier = () => {
    const nouveauPanier = { ...panier };
    // Si le panier n'est pas égale à 0, alors c'est bon
    if (nouveauPanier[id] >= 1) {
      nouveauPanier[id] -= 1;
    }
    setPanier(nouveauPanier);
  };

  return (
    <>
      <div className="product">
        <Link href={`/products/${id}`}>
          <img className="product-img" src={images} alt="" />
        </Link>
        <p className="product-title">{title}</p>
        <p className="product-category">{category.name}</p>

        {isOpenDescription ? (
          <button onClick={handleClick} className="product-detail-decription">
            ➡️➡️➡️
          </button>
        ) : (
          <button onClick={handleClick} className="product-detail-decription">
            ⬇⬇⬇
          </button>
        )}

        {isOpenDescription && (
          <>
            {" "}
            {/* En savoir + */}
            <p className="product-description color-text ">{description}</p>
            {/* ----- */}
            <div className="achat-panier">
              <p className="product-price color-text ">{price} €</p>
              <div className="product-buttons">
                <button
                  onClick={addPanier}
                  className="product-button product-add"
                >
                  +1
                </button>
                <button
                  onClick={deletePanier}
                  className="product-button product-remove"
                >
                  -1
                </button>
              </div>
            </div>
            {/* ----- */}
            <br />
            <br />
            {panier[id] ? (
              <div className="product-detail-achat">
                x{panier[id]} {title}
              </div>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default Product;
