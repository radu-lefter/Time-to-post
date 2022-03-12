import React from 'react';
import * as S from './HeatmapHeaderRow.style';

const hours = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];

function HeatmapHeaderRow() {
  return (
    <S.Container>
      {
        hours.map((hour) => (
          <S.Hour key={hour}>
            {hour}
          </S.Hour>
        ))
      }
    </S.Container>
  );
}

export default HeatmapHeaderRow;