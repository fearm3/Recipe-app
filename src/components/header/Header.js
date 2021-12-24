import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./HeaderStyle";

const Header = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  return (
    <div>
      <HeaderContainer>
        <MainHeader>Write a food</MainHeader>
        <Form
          setQuery={setQuery}
          query={query}
          getData={getData}
          mealTypes={mealTypes}
          setMeal={setMeal}
          meal={meal}
        />
      </HeaderContainer>
    </div>
  );
};

export default Header;
