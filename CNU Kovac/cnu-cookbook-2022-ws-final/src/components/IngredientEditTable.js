import React from 'react';
import { FormGroup, Label, Table } from 'reactstrap';
import { IngredientEditRow } from './IngredientEditRow';

export function IngredientEditTable(props) {
  const clickHandler = (ingredient) => {
    props.setIngredients(ingredient);
  };
  return (
    <>
      {props.ingredients && (
        <FormGroup>
          <Label for="ingredients">Ingrediencie: </Label>
          <Table id="ingredients">
            <tbody>
              {props.ingredients.map((ingredient, index) => (
                <IngredientEditRow
                  ingredient={ingredient}
                  clickHandler={() => clickHandler(ingredient)}
                  key={index}
                />
              ))}
            </tbody>
          </Table>
        </FormGroup>
      )}
    </>
  );
}
