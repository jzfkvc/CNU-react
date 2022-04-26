import React from 'react';
import { FaClock } from 'react-icons/fa';

export function PreparationTime(props) {
  return (
    <>
      {typeof props.preparationTime !== 'undefined' &&
        props.preparationTime > 0 && (
          <h5>
            <FaClock />
            {Math.floor(props.preparationTime / 60) > 0 ? (
              <>{Math.floor(props.preparationTime / 60)} h</>
            ) : (
              <></>
            )}{' '}
            {props.preparationTime % 60 > 0 ? (
              <>{props.preparationTime % 60} min</>
            ) : (
              <></>
            )}{' '}
          </h5>
        )}
    </>
  );
}
