import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export function DirectionsEdit(props) {
  const onChangeHandler = (event) => {
    props.onChangeHandler(event);
  };
  return (
    <FormGroup>
      <Label for="directions">Postup:</Label>
      <Input
        id="directions"
        type="textarea"
        defaultValue={props.directions}
        rows={20}
        onChange={(event) => onChangeHandler(event.target.value)}
      />
    </FormGroup>
  );
}
