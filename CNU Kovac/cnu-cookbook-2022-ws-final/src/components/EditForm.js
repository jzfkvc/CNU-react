import React from 'react';
import { Col, Form, Row, Button } from 'reactstrap';
import { AddGroup } from './AddGroup';
import { AddIngredient } from './AddIngredient';
import { DirectionsEdit } from './DirectionsEdit';
import { IngredientEditTable } from './IngredientEditTable';
import { PrepTimeEdit } from './PrepTimeEdit';
import { ServCountEdit } from './ServCountEdit';
import { SideDishEdit } from './SideDishEdit';
import { TitleEdit } from './TitleEdit';

export function EditForm(props) {
  return (
    <Form>
      <Row>
        <Col lg={10}>
          <h1>{props.newRecipe.title}</h1>
        </Col>
        <Col lg={2}>
          <Button onClick={props.ulozHandler}>uloz</Button>
          {typeof props.slug !== 'undefined' ? (
            <Button href={`/recipe/${props.slug}`}>zrus</Button>
          ) : (
            <Button href={`/`}>zrus</Button>
          )}
        </Col>
        <TitleEdit
          title={props.newRecipe.title}
          setTitle={(title) => props.setTitle(title)}
        />
      </Row>
      <Row>
        <Col lg={2}>
          <PrepTimeEdit
            preparationTime={props.newRecipe.preparationTime}
            setPreparationTime={(prepTime) => {
              props.setPreparationTime(prepTime);
            }}
          />
          <ServCountEdit
            servCount={props.newRecipe.servingCount}
            setServingCount={(servCount) => props.setServingCount(servCount)}
          />
          <SideDishEdit
            sideDish={props.newRecipe.sideDish}
            setSideDish={(sideDish) => props.setSideDish(sideDish)}
          />
        </Col>
        <Col lg={4}>
          <IngredientEditTable
            setIngredients={(ingredient) =>
              props.delIngredientHandler(ingredient)
            }
            ingredients={props.newRecipe.ingredients}
          />
          <AddIngredient
            clickHandler={(ingredient) =>
              props.addIngredientHandler(ingredient)
            }
          />
          <AddGroup
            clickHandler={(ingredient) =>
              props.addIngredientHandler(ingredient)
            }
          />
        </Col>
        <Col lg={6}>
          <DirectionsEdit
            directions={props.newRecipe.directions}
            onChangeHandler={(newValue) => props.setDirections(newValue)}
          />
        </Col>
      </Row>
    </Form>
  );
}
