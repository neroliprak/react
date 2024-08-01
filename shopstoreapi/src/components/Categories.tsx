import "../styles/categories.css";
import Category from "./Category";

const Categories = ({
  categories,
  isCategorySelected,
  setIsCategorySelected,
}) => {
  const handleClickDefault = () => {
    setIsCategorySelected("");
  };

  return (
    <>
      <div className="categories">
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            isCategorySelected={isCategorySelected}
            setIsCategorySelected={setIsCategorySelected}
          />
        ))}
        {isCategorySelected === "" ? (
          <button
            onClick={handleClickDefault}
            className="category-button selected"
          >
            Par défaut
          </button>
        ) : (
          <button onClick={handleClickDefault} className="category-button">
            Par défaut
          </button>
        )}
      </div>
    </>
  );
};

export default Categories;
