import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyle";

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  const handleSubmit = (e) => {
    console.log(query, meal);
    e.preventDefault();
    getData();
  };
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={getData}>Search</Button>
        <Select
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setMeal(e.target.value)}
        >
          {mealTypes?.map((item, index) => (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </Select>
      </FormContainer>
    </div>
  );
};

export default Form;
