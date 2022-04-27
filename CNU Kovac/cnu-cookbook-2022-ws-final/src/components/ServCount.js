import React from 'react';
import { Input, Label } from 'reactstrap';

export default function ServCount(props) {
  return (
    <p>
      {props.servCount && (
        <>
          <Label for="servingCaount">Pocet porcii:</Label>
          <Input
            id="servingCount"
            min={1}
            defaultValue={props.servCount}
            type="number"
            onChange={(event) => props.onChangeHandler(event.target.value)}
          />
        </>
      )}
    </p>
  );
}
