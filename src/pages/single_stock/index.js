import React from "react";
import "./index.css";

import { useParams } from "react-router-dom";
const SingleStock = () => {
  let { stock } = useParams();
  let stockObject = JSON.parse(stock);
  console.log(stockObject);
  return (
    <div>
      <h2>Stock Info</h2>

      <div>Name: {stockObject.name}</div>
      <div>Symbol: {stockObject.symbol}</div>
      <div>Last Price: {stockObject.lastPrice}</div>
      <div>Change: {stockObject.change}</div>
      <div>High: {stockObject.high}</div>
    </div>
  );
};

export default SingleStock;
