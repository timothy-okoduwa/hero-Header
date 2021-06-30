import React, { useState, useEffect, useRef } from "react";
import "./Body2.css";
import axios from "axios";
import Coin from "./Coin";

function Body2() {
  const textcolor = useRef();
  const textcolor2 = useRef();
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  const mycolor = ["purple", "black"];
  const mycolor2 = ["black", "tomato"];
  useEffect(() => {
    textcolor.current.style.color = mycolor[counter % mycolor.length];
    textcolor.current.style.transition = "all 350ms";
    textcolor2.current.style.color = mycolor2[counter % mycolor.length];
    textcolor2.current.style.transition = "all 350ms";
  });

  useEffect(() => {
    setInterval(() => {
      setCounter((el) => el + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    axios
      .get(
        " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      });
  });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredcoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        {/* <div style={{ color: "black" }}>{counter}</div> */}
        <h1 style={{ color: "black" }} ref={textcolor}>
          timothy's crypto㊗️ Tracker
        </h1>
        <br />
        <h1 className="coin-text" ref={textcolor2}>
          search a currency
        </h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredcoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default Body2;
