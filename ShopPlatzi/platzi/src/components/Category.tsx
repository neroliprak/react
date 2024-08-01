import "../styles/category.css";
const Category = ({ category, filtreCatagory, setFiltreCategory }) => {
  const handleClick = () => {
    setFiltreCategory(category.id);
    // const nouveauFiltre = { ...filtreCatagory };
    // if (filtreCatagory[category.id] === undefined) {
    //   nouveauFiltre[category.id] = 1;
    // }
    // setFiltreCategory(nouveauFiltre);
  };

  return (
    <>
      {filtreCatagory === category.id ? (
        <button onClick={handleClick} className="category select">
          <p>{category.name}</p>
        </button>
      ) : (
        <button onClick={handleClick} className="category ">
          <p>{category.name}</p>
        </button>
      )}
    </>
  );
};

export default Category;
