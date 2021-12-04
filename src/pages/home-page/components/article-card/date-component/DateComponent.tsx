import { FC } from 'react';
import moment from 'moment';

import './dateComponent.scss';
import calendar from '../../../../../assets/static/akar-icons_calendar.svg';

interface DateComponentProps {
  date: string;
}

export const DateComponent: FC<DateComponentProps> = ({ date }) => {
  return (
    <div className="date">
      <img src={calendar} alt="calendar" className="date__img" />
      {date && (
        <p className="date__title">{moment(date).format('MMMM Do, YYYY')}</p>
      )}
    </div>
  );
};
