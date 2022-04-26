import React from 'react';
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from 'reactstrap';

export function PrepTimeEdit(props) {
  return (
    <FormGroup>
      <Label for="preparationTime">Cas pripravy:</Label>

      <InputGroup>
        <Input
          id="preparationTime"
          min={0}
          value={props.preparationTime}
          onChange={(event) => {
            props.setPreparationTime(event.target.value);
          }}
          type="number"
        />
        <InputGroupText>min</InputGroupText>
      </InputGroup>
    </FormGroup>
  );
}
