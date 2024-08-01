"use client";

import Categories from "@/components/Categories";
import Panier from "@/components/Panier";
import Products from "@/components/Products";
import SearchBar from "@/components/SearchBar";
import getAllProducts from "@/queries/getAllProducts";
import { useEffect, useState } from "react";

const Shop = () => {
  const [produits, setProduits] = useState([]);
  const [isCategorySelected, setIsCategorySelected] = useState("");
  const [inputSearchBar, setInputSearchBar] = useState("");

  const [paniers, setPaniers] = useState({});

  console.log(inputSearchBar);

  // const filtreInputSearchBar = () => {
  //   if (inputSearchBar) {
  //     return produits.filter((produit) =>
  //       produit.name.includes(inputSearchBar)
  //     );
  //   }
  //   return produits;
  // };

  // const filtreProduitsCategories = () => {
  //   if (isCategorySelected) {
  //     return produits.filter(
  //       (produit) => produit.category === isCategorySelected
  //     );
  //   }
  //   return produits;
  // };

  // const afficheProduit = produits.filter((produit) => {
  //   if (inputSearchBar && !produit.name.includes(inputSearchBar)) {
  //     return false;
  //   }
  //   if (isCategorySelected && produit.category !== isCategorySelected) {
  //     return false;
  //   }
  //   return produits;
  // });

  const afficheProduit = produits.filter((produit) => {
    if (inputSearchBar && !produit.name.includes(inputSearchBar)) {
      return false;
    }
    if (isCategorySelected && produit.category !== isCategorySelected) {
      return false;
    }
    return true;
  });

  console.log(isCategorySelected);

  // state dérivé
  const getCategory = () => {
    const newSetCategory: string[] = [];
    produits.forEach((produit) => {
      if (!newSetCategory.includes(produit.category)) {
        newSetCategory.push(produit.category);
      }
    });
    return newSetCategory;
  };
  const categories = getCategory();
  console.log(categories);

  // useEffect(() => {
  // const newSetCategory = [];
  // produits.forEach((produit) => {
  //   if (!newSetCategory.includes(produit.category)) {
  //     newSetCategory.push(produit.category);
  //   }
  // });
  // setCategories(newSetCategory);
  // }, [produits]);

  // useEffect(() => {
  //   var category = Array.from(
  //     new Set(produits.map((produit, index) => produit.category))
  //   );
  //   setCategories(category);
  // }, [produits]);

  console.log(categories);
  console.log(paniers);

  useEffect(() => {
    const initProduits = async () => {
      setProduits(await getAllProducts());
    };
    initProduits();
  }, []);

  console.log(produits);

  return (
    <>
      <SearchBar
        inputSearchBar={inputSearchBar}
        setInputSearchBar={setInputSearchBar}
      />
      <Categories
        categories={categories}
        isCategorySelected={isCategorySelected}
        setIsCategorySelected={setIsCategorySelected}
      />
      <Panier />
      <Products
        produits={afficheProduit}
        setPaniers={setPaniers}
        paniers={paniers}
      />
    </>
  );
};

export default Shop;
