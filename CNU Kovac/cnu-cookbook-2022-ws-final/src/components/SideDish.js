import React from 'react';
import { FaUtensilSpoon } from 'react-icons/fa';

export function SideDish(props) {
  return (
    <h5>
      {props.sideDish && (
        <>
          <FaUtensilSpoon /> {props.sideDish}
        </>
      )}
    </h5>
  );
}
