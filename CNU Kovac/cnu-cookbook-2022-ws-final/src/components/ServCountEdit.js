import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export function ServCountEdit(props) {
  return (
    <FormGroup>
      <Label for="servingCaount">Pocet porcii:</Label>
      <Input
        id="servingCount"
        min={1}
        placeholder="pocet porcii"
        defaultValue={props.servCount}
        onChange={(event) => {
          props.setServingCount(event.target.value);
        }}
        type="number"
      />
    </FormGroup>
  );
}
