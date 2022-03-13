import React from 'react';
import { arrayOf, func, number } from 'prop-types';
import propTypes from './propTypes';
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
        postsPerHour.map((posts, hour) => (
          <S.Hour
            // eslint-disable-next-line react/no-array-index-key
            key={hour}
            numPosts={posts.length}
            onClick={() => onClickHour({ day, hour })}
            selected={hour === selectedHour}
            type="button"
          >
            {posts.length}
          </S.Hour>
        ))
      }
    </S.Container>
  );
}

HeatmapRow.propTypes = {
  day: number.isRequired,
  postsPerHour: arrayOf(arrayOf(propTypes.post)).isRequired,
  onClickHour: func.isRequired,
  selectedHour: number,
};

HeatmapRow.defaultProps = {
  selectedHour: null,
};

export default HeatmapRow;