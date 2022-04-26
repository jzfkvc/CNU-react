import React from 'react';
import { useState } from 'react';
import {
  Col,
  FormGroup,
  Input,
  InputGroup,
  Button,
  Row,
  Label,
} from 'reactstrap';

export function AddIngredient(props) {
  const [name, setName] = useState('');
  const [amountUnit, setAmountUnit] = useState('');
  const [amount, setAmount] = useState();
  const clickHandler = () => {
    if (amount === 0) {
      setAmount();
    }
    const ingredient = { name: name, amountUnit: amountUnit, amount: amount };
    props.clickHandler(ingredient);
  };
  return (
    <FormGroup id="addIngredient">
      <Row>
        <Label for="addIngredient">Pridat ingredienciu:</Label>
        <Col>
          <Input
            type="number"
            placeholder="Mnozstvo"
            min={0}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Col>
        <Col>
          <Input
            placeholder="Jednotka"
            value={amountUnit}
            onChange={(event) => {
              setAmountUnit(event.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </FormGroup>
  );
}
