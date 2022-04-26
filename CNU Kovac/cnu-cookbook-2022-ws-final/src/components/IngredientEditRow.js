import React from 'react';
import { Button } from 'reactstrap';
import Ingredient from './Ingredient';

export function IngredientEditRow(props) {
  return (
    <tr>
      <Ingredient ingredient={props.ingredient} />
      <td>
        <Button close onClick={() => props.clickHandler(props.ingredient)} />
      </td>
    </tr>
  );
}
