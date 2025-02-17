const SelectMenu = ({ setQuery }) => {
  return (
    <select
      className="filter-by-region"
      onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
    >
      <option hidden>Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SelectMenu;
