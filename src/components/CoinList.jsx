import React from "react";
import "./style.css";

const CoinList = ({
  name,
  image,
  symbol,
  price,
  pricechange,
  marketcap,
  high,
  low,
}) => {
  return (
    <>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>
              {name} {"\u00A0"}
              <span className="special-font">{symbol.toUpperCase()}</span>
            </h1>
          </div>

          <div className="coin-data">
            <p className="coin-price">₹{price.toLocaleString()}</p>

            {pricechange < 0 ? (
              <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
            )}
            <p className="coin-marketcap">₹{marketcap.toLocaleString()}</p>

            <p className="coin-percent">₹{high}</p>
            <p className="coin-marketcap">₹{low}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinList;
