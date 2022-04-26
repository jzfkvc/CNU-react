import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Alert, Col, Container, Label, Row, Spinner } from 'reactstrap';
import { api } from '../api';
import { DirectionsList } from '../components/DirectionsList';
import { EditForm } from '../components/EditForm';

export function RecipeEditPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [newRecipe, setNewRecipe] = useState();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => {
        setRecipe(res.data);
        setNewRecipe({
          title: res.data.title,
          preparationTime: res.data.preparationTime,
          directions: res.data.directions,
          ingredients: res.data.ingredients,
          servingCount: res.data.servingCount,
          sideDish: res.data.sideDish,
        });
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);

  const navigate = useNavigate();

  const ulozHandler = () => {
    api
      .post(`/recipes/${recipe._id}`, newRecipe)
      .then((response) => {
        navigate(`/recipe/${response.data.slug}`, { replace: true });
      })
      .catch((error) => {
        //console.log(error.response.data);
      });
  };

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

  return (
    <>
      {isLoading && <Spinner />}
      {error && (
        <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>
      )}
      {typeof newRecipe !== 'undefined' && (
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
      )}
    </>
  );
}
