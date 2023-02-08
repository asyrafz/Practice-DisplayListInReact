import React from "react";
import "./styles.css";

const items = ["mango", "apple", "banana", "cherry"];

const ItemList = () => {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index} className="item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
