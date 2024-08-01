import "../styles/searchbar.css";

const SearchBar = ({ inputTitre, setInputTitre }) => {
  const handleChange = (e) => {
    setInputTitre(e.target.value);
  };
  return (
    <>
      <div className="searchbar-wrap">
        <label htmlFor="search-bar">Rechercher le vêtement !</label>
        <br />
        <input onChange={handleChange} id="search-bar" type="text" />
      </div>
    </>
  );
};

export default SearchBar;
