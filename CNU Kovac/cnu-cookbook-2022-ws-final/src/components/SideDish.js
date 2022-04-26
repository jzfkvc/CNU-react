import React from 'react';
import { FaUtensilSpoon } from 'react-icons/fa';

export function SideDish(props) {
  return (
    <h5>
      {typeof props.sideDish !== 'undefined' && (
        <>
          <FaUtensilSpoon /> {props.sideDish}
        </>
      )}
    </h5>
  );
}
