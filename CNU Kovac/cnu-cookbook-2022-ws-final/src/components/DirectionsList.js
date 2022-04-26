import React from 'react';
import { List } from 'reactstrap';

export function DirectionsList({ directions }) {
  return (
    <>
      {typeof directions !== 'undefined' && (
        <List type="unstyled">
          <ul>
            {directions
              .split(/\n/)
              .filter((line) => line !== '')
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
        </List>
      )}
    </>
  );
}
