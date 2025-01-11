import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm"; // Import the ItemForm component
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const filteredItems = items;

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} /> {/* Only one form rendered */}
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;

