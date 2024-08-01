"use client";
import { useEffect, useState } from "react";

const Shop2 = () => {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      const responses = await fetch("https://api.storerestapi.com/products");
      const jsonResponses = await responses.json();
      setProduits(jsonResponses.data);
    };
    getApi();
  }, []);

  console.log(produits.data);
  return (
    <>
      {produits.map((produit) => (
        <p>{produit.title}</p>
      ))}
    </>
  );
};
export default Shop2;
