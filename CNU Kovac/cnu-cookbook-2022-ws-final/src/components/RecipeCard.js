import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import placeholder from '../images/food-placeholder.png';

export function RecipeCard({ title, preparationTime, slug }) {
  const h = Math.floor(preparationTime / 60);
  const m = preparationTime % 60;
  return (
    <Link
      to={`/recipe/${slug}`}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <Card className="h-100">
        <CardImg width="100%" src={placeholder} alt="Preview" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle>
            {h > 0 ? <>{h} h</> : <></>} {m > 0 ? <>{m} min</> : <></>}
          </CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
}
