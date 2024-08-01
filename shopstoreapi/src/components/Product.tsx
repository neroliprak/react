import { useState } from "react";
import "../styles/produit.css";

const Product = ({
  produit: {
    product_id,
    name,
    description,
    price,
    discount,
    availability,
    brand,
    category,
    rating,
  },
  setPaniers,
  paniers,
}) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleOpen = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const isAvailability = () => {
    return availability ? "🟢 Disponible" : "🔴 Non disponible";
  };
  const isAvailabilityColor = () => {
    return availability ? "green" : "red";
  };

  const addPanier = () => {
    const nouveauPanier = { ...paniers };
    if (nouveauPanier[product_id] === undefined) {
      nouveauPanier[product_id] = 0;
    }
    nouveauPanier[product_id] += 1;
    setPaniers(nouveauPanier);
  };

  const removePanier = () => {
    const nouveauPanier = { ...paniers };
    if (nouveauPanier[product_id] >= 1) {
      nouveauPanier[product_id] -= 1;
    }
    setPaniers(nouveauPanier);
  };

  return (
    <>
      <div className="produit">
        <img
          className="produit-img"
          src="https://images.unsplash.com/photo-1721908419050-756c1f2dbeea?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p className="produit-title">{name}</p>
        <p className={isAvailabilityColor()}>{isAvailability()}</p>
        {paniers[product_id] && (
          <p>
            x {paniers[product_id]} {name}
          </p>
        )}
        <button onClick={handleOpen} className="produit-savoir-plus">
          En savoir plus
        </button>
        <button onClick={addPanier}>+1</button>
        <button onClick={removePanier}>-1</button>

        {isDescriptionOpen && (
          <>
            <p>{category}</p>
            <p>{description}</p>
            <div className="produit-remise">
              <p>{price} €</p>

              <p>remise de : {discount} %</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
