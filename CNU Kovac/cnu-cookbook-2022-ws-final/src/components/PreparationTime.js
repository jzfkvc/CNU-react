import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

export function PreparationTime({ preparationTime }) {
  return (
    <>
      {preparationTime && (
        <h5>
          <AiOutlineClockCircle />
          {Math.floor(preparationTime / 60) > 0
            ? `${Math.floor(preparationTime / 60)} h`
            : ''}{' '}
          {preparationTime % 60 > 0 ? `${preparationTime % 60} min` : ''}{' '}
        </h5>
      )}
    </>
  );
}
