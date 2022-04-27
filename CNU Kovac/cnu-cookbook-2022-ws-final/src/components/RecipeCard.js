import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import placeholder from '../images/food-placeholder.png';
import { PreparationTime } from './PreparationTime';

export function RecipeCard({ title, preparationTime, slug }) {
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
            <PreparationTime preparationTime={preparationTime} />
          </CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
}
