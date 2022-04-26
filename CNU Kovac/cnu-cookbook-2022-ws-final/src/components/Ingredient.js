import React from 'react';

export default function Ingredient({ ingredient, servCount }) {
  return (
    <>
      {ingredient.isGroup ? (
        <td>{ingredient.name}</td>
      ) : (
        <>
          {typeof ingredient.amount !== 'undefined' &&
          ingredient.amount !== null &&
          ingredient.amount !== 0 &&
          typeof servCount !== 'undefined' ? (
            <td>{ingredient.amount * servCount}</td>
          ) : (
            <td>{ingredient.amount !== 0 && ingredient.amount}</td>
          )}
          <td>{ingredient.amountUnit}</td>
          <td>{ingredient.name}</td>
        </>
      )}
    </>
  );
}
