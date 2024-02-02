import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods((prevFoods) => [...prevFoods, newFood]);
  }

  const filteredFoods = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const handleLiClick = (foodId) => {
    // Add your logic for handling the click event on a food item
    console.log(`Food with ID ${foodId} clicked`);
  };

  const foodList = filteredFoods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <label>
        Filter by Cuisine:
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="All">All</option>
          {/* Add other cuisine options based on your data */}
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;