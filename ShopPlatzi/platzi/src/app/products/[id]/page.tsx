"use client";

import getOneProduct from "@/queries/getOneProduct";
import { productsType } from "@/types/ProductsType";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const AfficheProduct = () => {
  const [produit, setProduit] = useState<productsType>();
  const params = useParams<{ id: string }>();
  console.log(params);

  useEffect(() => {
    const initOneProduct = async () => {
      setProduit(await getOneProduct(params.id));
    };
    initOneProduct();
  }, []);

  console.log(produit);
  if (produit === undefined) {
    return "chargement";
  }
  return (
    <>
      {/* Si undefined affiche undefined (?) passe l'erreur */}
      {/* <p>{produit?.title}</p> */}
      <p>{produit.title}</p>
    </>
  );
};

export default AfficheProduct;
