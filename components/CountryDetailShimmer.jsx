import "./Country.css";

const CardSkeleton = () => {
  return (
    <div className="country-dtl">
      <div className="flag-img shimmer-bg"></div>
      <div className="dtl-text-container">
        <div className="card-title shimmer-bg"></div>
        <div className="dtl-text">
          {Array.from({ length: 6 }).map(() => {
            <p className="shimmer-bg"></p>;
          })}
        </div>
        <div className="border-countries">
          <div className="shimmer-bg"></div>
          <div className="shimmer-bg"></div>
          <div className="shimmer-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
