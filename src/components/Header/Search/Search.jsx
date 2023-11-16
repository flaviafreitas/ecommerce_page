import "./index.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="search__input-container">
        <img
          src="/search.png"
          alt="search logo"
          className="search__search-logo"
        />
        <input type="text" placeholder="Pesquisar" />
      </div>
      <img src="/profile.png" alt="profile logo" className="search__profile" />
      <img src="/heart.png" alt="favorite logo" className="search__heart"/>
    </div>
  );
};

export default Search;