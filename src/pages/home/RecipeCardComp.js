import React from "react";
import { Button, RecipeCard, RecipeHeader, RecipeImage } from "./HomeStyle";
import defaultImage from "../../assets/default-image.jpg"; //assetden dikkat
import { useNavigate } from "react-router-dom";

const RecipeCardComp = ({ recipe }) => {
  let navigate = useNavigate();
  console.log("recipe", recipe);
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
  };

  return (
    <RecipeCard>
      <RecipeHeader>{recipe.label}</RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImage} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;

// *{/* <RecipeCard>
//*   <RecipeHeader>{recipe.label}</RecipeHeader>
// *  <RecipeImage src={recipe?.image || defaultImage} />
//  * <Button onClick={moreClick}>View More</Button>
//* </RecipeCard>; */}
