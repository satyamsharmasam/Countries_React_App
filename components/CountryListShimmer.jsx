import "./CountryListShimmer.css";
const CountryListShimmer = () => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: 20 }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-img"></div>
          <div className="skeleton-text">
            <div className="skeleton-line long"></div>
            <div className="skeleton-line medium"></div>
            <div className="skeleton-line short"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CountryListShimmer;
