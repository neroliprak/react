const SearchBar = ({ inputSearchBar, setInputSearchBar }) => {
  const handleChangeInput = (e) => {
    setInputSearchBar(e.target.value);
  };

  return (
    <>
      <label htmlFor="input-search-bar">Barre de recherche</label>
      <input id="input-search-bar" type="text" onChange={handleChangeInput} />
    </>
  );
};

export default SearchBar;
