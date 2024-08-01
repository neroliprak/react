import { useState } from "react";
import "../styles/categories.css";

const Category = ({ category, isCategorySelected, setIsCategorySelected }) => {
  const handleClickCategory = () => {
    setIsCategorySelected(category);
  };

  return (
    <>
      {isCategorySelected === category ? (
        <button
          onClick={handleClickCategory}
          className="category-button selected"
        >
          {category}
        </button>
      ) : (
        <button onClick={handleClickCategory} className="category-button">
          {category}
        </button>
      )}
    </>
  );
};

export default Category;
