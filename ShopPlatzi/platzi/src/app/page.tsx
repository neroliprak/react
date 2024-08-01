"use client";

import Category from "@/components/Categories";
import Panier from "@/components/Panier";
import Products from "@/components/Products";
import SearchBar from "@/components/SearchBar";
import getAllProducts from "@/queries/getAllProducts";
import { productsType } from "@/types/ProductsType";
import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState<productsType[]>();
  const [panier, setPanier] = useState({});
  const [filtreCatagory, setFiltreCategory] = useState("");
  const [inputTitre, setInputTitre] = useState("");

  useEffect(() => {
    const initProducts = async () => {
      setProducts(await getAllProducts());
    };
    initProducts();
  }, []);

  if (products === undefined) {
    return "chargement";
  }
  console.log(panier);

  // Je veux filtrer mes produits, donc faire un nouveau tableau prenant en compte ce que je veux :

  const filterCategories = () => {
    if (filtreCatagory) {
      return products.filter(
        (product) => product.category.id === filtreCatagory
      );
    }
    return products;
  };

  console.log(filtreCatagory);

  console.log(inputTitre);

  const afficheProduit = products.filter((product) => {
    // S'il y a un filtre actif et que le produit ne correspond pas à la catégorie => ça dégage
    if (filtreCatagory && product.category.id !== filtreCatagory) {
      return false;
    }

    // S'il y a un input actif et que le titre du produit n'est pas = au titre du input => ça dégage
    if (
      inputTitre &&
      !product.title.toLowerCase().includes(inputTitre.toLowerCase())
    ) {
      return false;
    }
    return products;
  });

  console.log(products);

  return (
    <>
      <SearchBar inputTitre={inputTitre} setInputTitre={setInputTitre} />
      <Panier panier={panier} products={products} />
      <Category
        filtreCatagory={filtreCatagory}
        setFiltreCategory={setFiltreCategory}
      />
      <Products
        products={afficheProduit}
        panier={panier}
        setPanier={setPanier}
      />
    </>
  );
};

export default Shop;
