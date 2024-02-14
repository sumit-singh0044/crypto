import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import CoinList from "./CoinList";

const Content = () => {
  const [coin, setCoin] = useState("");
  const [coinData, setCoinData] = useState([]);

  // Define your custom headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer your_access_token_here",
  };

  const handleChange = (e) => {
    setCoin(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
        { headers }
      )
      .then((res) => {
        setCoinData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterCoins = coinData.filter((item) =>
    item.name.toLowerCase().includes(coin.toLowerCase())
  );

  const sort = () => {
    let updateList = [...coinData];
    updateList.sort((a, b) => b.current_price - a.current_price);
    setCoinData(updateList);
  };

  return (
    <>
      <input
        className="form-control form-control-lg form-width"
        type="text"
        placeholder="Search Coin"
        onChange={handleChange}
      />
      <div className="heading">
        <p className="para-margin1">Symbol</p>
        <p className="para-margin2">Name</p>
        <p className="para-margin3">
          Price
            <button className="button-size" onClick={sort}>
              {<i className="fa-solid fa-sort-up"></i>}
            </button>
        </p>
        <p className="para-margin4">24 Hour</p>
        <p className="para-margin5">Market Cap</p>
        <p className="para-margin6">24h High</p>
        <p className="para-margin7">24h Low</p>
      </div>

      {filterCoins.map((item) => (
        <CoinList
          key={item.id}
          name={item.name}
          image={item.image}
          symbol={item.symbol}
          marketcap={item.market_cap}
          price={item.current_price}
          pricechange={item.price_change_percentage_24h}
          high={item.high_24h}
          low={item.low_24h}
        />
      ))}
    </>
  );
};

export default Content;
