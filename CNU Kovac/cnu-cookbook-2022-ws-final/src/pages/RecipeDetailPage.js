import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Alert, Row, Col, Button, Label } from 'reactstrap';
import { IngredientsTable } from '../components/IngredientsTable';
import { api } from '../api';
import { DirectionsList } from '../components/DirectionsList';
import { PreparationTime } from '../components/PreparationTime';
import { SideDish } from '../components/SideDish';
import ServCount from '../components/ServCount';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [servCount, setServCount] = useState(1);

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => {
        setRecipe(res.data);
        if (typeof res.data.servingCount !== 'undefined') {
          setServCount(res.data.servingCount);
        } else {
          setServCount(1);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);

  function delHandler() {
    api
      .delete(`/recipes/${recipe._id}`)
      .then((response) => {
        //console.log(response);
      })
      .catch((error) => {
        //console.log(error.response.data);
      });
  }

  //console.log(recipe);
  return (
    <>
      {isLoading && <Spinner />}
      {error && (
        <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>
      )}
      {recipe && (
        <Container>
          <Row>
            <Col lg={10}>
              <h1>{recipe.title}</h1>
            </Col>
            <Col lg={2}>
              <Button href={`/recipe/${slug}/edit`}>Uprav</Button>
              <Button href={`/`} onClick={delHandler}>
                Vymaz
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <PreparationTime preparationTime={recipe.preparationTime} />
              <SideDish sideDish={recipe.sideDish} />
              <ServCount
                servCount={recipe.servingCount}
                onChangeHandler={(count) => {
                  setServCount(count / recipe.servingCount);
                }}
              />
              <IngredientsTable
                ingredients={recipe.ingredients}
                servCount={servCount}
              />
            </Col>
            <Col lg={8}>
              {typeof recipe.directions !== 'undefined' &&
                recipe.directions.trim() !== '' && (
                  <Label for="DirectList">Postup:</Label>
                )}
              <DirectionsList id="DirectList" directions={recipe.directions} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
