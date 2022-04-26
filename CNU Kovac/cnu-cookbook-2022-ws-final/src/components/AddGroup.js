import React from 'react';
import { useState } from 'react';
import { Button, FormGroup, Input, InputGroup, Label, Row } from 'reactstrap';

export function AddGroup(props) {
  const [name, setName] = useState('');
  const clickHandler = () => {
    const ingredient = {
      name: name,
      amount: null,
      amountUnit: '',
      isGroup: true,
    };
    props.clickHandler(ingredient);
  };
  return (
    <FormGroup id="addGroup">
      <Row>
        <Label for="addGroup">Pridat skupinu:</Label>
        <InputGroup>
          <Input
            placeholder="Nazov"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Button onClick={clickHandler}>+Pridaj</Button>
        </InputGroup>
      </Row>
    </FormGroup>
  );
}
