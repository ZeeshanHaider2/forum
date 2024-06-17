import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./StoreItems";

function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((cart) => {
      return [item, ...cart];
    });
  };

  const deleteItem = (targetIndex) => {
    setCart((cart) => {
      return cart.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>GroceryCart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index} onClick={() => deleteItem(index)}>
            {item}
          </li>
        ))}
      </ul>

      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

export default GroceryCart;
