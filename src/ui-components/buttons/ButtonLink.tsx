import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './buttonLink.scss';

import arrowRight from '../../assets/static/Arrow - Right.svg';
import arrowLeft from '../../assets/static/Arrow - left.svg';

export enum Direction {
  right = 'right',
  left = 'left',
}

interface IButtonLinkProps {
  link: string;
  children: React.ReactNode | React.ReactChild;
  variant: Direction;
}

export const ButtonLink: FC<IButtonLinkProps> = ({
  link,
  children,
  variant,
}) => {
  return (
    <Link to={link} className="link">
      {variant === Direction.right && (
        <>
          <div className="link__title">{children}</div>
          <img src={arrowRight} alt="arrow-right" className="link__img" />
        </>
      )}
      {variant === Direction.left && (
        <>
          <img src={arrowLeft} alt="arrow-left" className="link__img" />
          <div className="link__title">{children}</div>
        </>
      )}
    </Link>
  );
};
