import React from "react";

export default function ItemList({ items, onItemClick }) {
  const handleClick = (e) => {
    const item = e.target.value;
    onItemClick(item);
  };
  return (
    <div>
      {items.map((item, index) => (
        <button value={item} key={index} onClick={handleClick}>
          {item}
        </button>
      ))}
    </div>
  );
}
