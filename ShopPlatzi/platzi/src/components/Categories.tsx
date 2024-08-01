import getAllCategory from "@/queries/getAllCategory";
import { useEffect, useState } from "react";
import Category from "./Category";
import "../styles/category.css";

const Categories = ({ filtreCatagory, setFiltreCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const initCategory = async () => {
      setCategories(await getAllCategory());
    };
    initCategory();
  }, []);

  const handleClick = () => {
    setFiltreCategory("");
  };
  return (
    <>
      <div className="categories-wrap">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            filtreCatagory={filtreCatagory}
            setFiltreCategory={setFiltreCategory}
          />
        ))}
        {/* POURQUOI SI JE MET JUSTE (SETFILTRECATEGORY("") => c'est pas bon ?) */}
        <button onClick={handleClick} className="category ">
          <p>Defaut</p>
        </button>
      </div>
    </>
  );
};

export default Categories;
