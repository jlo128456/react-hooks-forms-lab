import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);

    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item-name">Name:</label>
      <input
        id="item-name"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <label htmlFor="item-category">Category:</label>
      <select
        id="item-category"
        value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit">Add to List</button> {/* Change button text to match the test */}
    </form>
  );
}

export default ItemForm;




