import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export function TitleEdit(props) {
  const title =
    props.title === 'Novy recept'
      ? 'Ak nezadas nazov recept sa neulozi'
      : props.title;
  return (
    <FormGroup>
      <Label for="title">Nazov:</Label>
      <Input
        id="title"
        placeholder={title}
        onChange={(event) => {
          props.setTitle(event.target.value);
        }}
      />
    </FormGroup>
  );
}
