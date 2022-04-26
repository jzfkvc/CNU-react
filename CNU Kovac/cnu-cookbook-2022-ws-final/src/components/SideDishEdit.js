import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export function SideDishEdit(props) {
  return (
    <FormGroup>
      <Label for="sideDish">Priloha:</Label>
      <Input
        id="sideDish"
        placeholder="Priloha"
        defaultValue={props.sideDish}
        onChange={(event) => {
          props.setSideDish(event.target.value);
        }}
      />
    </FormGroup>
  );
}
