import React from 'react';
import { useState } from 'react';
import { Col, Container, Label, Row } from 'reactstrap';
import { DirectionsList } from '../components/DirectionsList';
import { api } from '../api';
import { EditForm } from '../components/EditForm';
import { useNavigate } from 'react-router-dom';

export function RecipeAddPage() {
  const [newRecipe, setNewRecipe] = useState({
    title: 'Novy recept',
    preparationTime: 0,
    directions: '',
    ingredients: [],

    sideDish: '',
  });

  const delIngredientHandler = (ingredient) => {
    setNewRecipe((old) => ({
      ...old,
      ingredients: old.ingredients.filter((i) => i !== ingredient),
    }));
  };
  const addIngredientHandler = (ingredient) => {
    if (typeof ingredient.name !== 'undefined') {
      if (ingredient.name !== '') {
        setNewRecipe((old) => ({
          ...old,
          ingredients: [...old.ingredients, ingredient],
        }));
      }
    }
  };
  const navigate = useNavigate();

  const ulozHandler = () => {
    if (newRecipe.title !== '' && newRecipe.title !== 'Novy recept') {
      api
        .post(`/recipes`, newRecipe)
        .then((response) => {
          navigate(`/recipe/${response.data.slug}`, { replace: true });
        })
        .catch((error) => {
          //console.log(error.response.data);
        });
    }
  };

  return (
    <Container>
      <Row>
        <EditForm
          newRecipe={newRecipe}
          ulozHandler={ulozHandler}
          setTitle={(title) =>
            setNewRecipe((old) => ({ ...old, title: title }))
          }
          setPreparationTime={(prepTime) =>
            setNewRecipe((old) => ({ ...old, preparationTime: prepTime }))
          }
          setServingCount={(servCount) =>
            setNewRecipe((old) => ({ ...old, servingCount: servCount }))
          }
          setSideDish={(sideDish) =>
            setNewRecipe((old) => ({ ...old, sideDish: sideDish }))
          }
          setIngredients={(ingredient) => delIngredientHandler(ingredient)}
          setDirections={(d) =>
            setNewRecipe((old) => ({ ...old, directions: d }))
          }
          clickHandler={(ingredient) => addIngredientHandler(ingredient)}
          onChangeHandler={(d) =>
            setNewRecipe((old) => ({ ...old, directions: d }))
          }
          addIngredientHandler={(ingredient) =>
            addIngredientHandler(ingredient)
          }
          delIngredientHandler={(ingredient) =>
            delIngredientHandler(ingredient)
          }
        />
      </Row>
      <Row>
        <Col>
          <Label for="directionsList">Nahlad postupu:</Label>
          <DirectionsList
            id="directionsList"
            directions={newRecipe.directions}
          />
        </Col>
      </Row>
    </Container>
  );
}
