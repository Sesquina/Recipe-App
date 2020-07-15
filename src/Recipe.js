import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
