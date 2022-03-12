import React from 'react';
import { arrayOf, func, number } from 'prop-types';
import * as S from './HeatmapRow.style';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function HeatmapRow({
  day,
  postsPerHour,
  onClickHour,
  selectedHour,
}) {
  return (
    <S.Container>
      <S.Weekday>{weekdays[day]}</S.Weekday>

      {
        postsPerHour.map((numPosts, hour) => (
          <S.Hour
            // eslint-disable-next-line react/no-array-index-key
            key={hour}
            numPosts={numPosts}
            onClick={() => onClickHour({ day, hour })}
            selected={hour === selectedHour}
            type="button"
          >
            {numPosts}
          </S.Hour>
        ))
      }
    </S.Container>
  );
}

HeatmapRow.propTypes = {
  day: number.isRequired,
  postsPerHour: arrayOf(number).isRequired,
  onClickHour: func.isRequired,
  selectedHour: number,
};

HeatmapRow.defaultProps = {
  selectedHour: null,
};

export default HeatmapRow;