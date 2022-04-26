import React from 'react';
import { Table } from 'reactstrap';
import Ingredient from './Ingredient';

export function IngredientsTable(props) {
  return (
    <Table type="unstyled">
      <tbody>
        {props.ingredients.map((ingredient) => (
          <tr key={ingredient._id}>
            <Ingredient ingredient={ingredient} servCount={props.servCount} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
