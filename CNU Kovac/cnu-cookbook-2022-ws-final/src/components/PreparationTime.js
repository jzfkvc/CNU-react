import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

export function PreparationTime(props) {
  return (
    <>
      {props.preparationTime && props.preparationTime > 0 && (
        <h5>
          <AiOutlineClockCircle />
          {Math.floor(props.preparationTime / 60) > 0 ? (
            <>{Math.floor(props.preparationTime / 60)} h</>
          ) : (
            ''
          )}{' '}
          {props.preparationTime % 60 > 0 ? (
            <>{props.preparationTime % 60} min</>
          ) : (
            ''
          )}{' '}
        </h5>
      )}
    </>
  );
}
