import { PanierType } from "@/types/PanierType";
import "../styles/panier.css";
import { productsType } from "@/types/ProductsType";

type Props = {
  panier: PanierType;
  products: productsType[];
};

const Panier = ({ panier, products }: Props) => {
  // Pour l'instant il ressemble à panier = {9:2, 12:1, 15:4}

  let prixTotale = 0;
  let listeTitlePanier = [];
  //Transforme en un tableau de [clé,valeur] = [["9",2]["12",1]["15",4]]
  //  Pour chaque élément du panier, on fait un truc :
  Object.entries(panier).map(([id, quantity]) => {
    // Et ce qu'on fait c'est trouver
    const prixDuProduit = products.find(
      (produit) => +produit.id === +id
    )!.price;
    prixTotale += quantity * prixDuProduit;
  });

  return (
    <>
      <div className="panier-wrap">Votre panier : {prixTotale} €</div>
    </>
  );
};
export default Panier;
