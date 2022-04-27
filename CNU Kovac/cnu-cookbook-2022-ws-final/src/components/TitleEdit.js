import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export function TitleEdit(props) {
  return (
    <FormGroup>
      <Label for="title">Nazov:</Label>
      <Input
        id="title"
        placeholder="Ak nezadas nazov recept sa neulozi"
        value={props.title}
        onChange={(event) => {
          props.setTitle(event.target.value);
        }}
      />
    </FormGroup>
  );
}
