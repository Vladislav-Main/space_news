import React, { FC } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IArticle } from '../../../../types/types';
import { styled } from '@mui/system';

import arrowRight from '../../../../assets/static/Arrow - Right.svg';
import arrowLeft from '../../../../assets/static/Arrow - left.svg';

import './articleCard.scss';
import { Link } from 'react-router-dom';
import { DateComponent } from './date-component/DateComponent';

export interface ArticleCardProps {
  article: IArticle;
}

export const TitleTypography = styled(Typography)`
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-size: 24px;
  color: #363636;
`;
export const SummaryTypography = styled(Typography)`
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-size: 16px;
  line-hight: 150%;
  color: #363636;
  with: 350px;
  height: 96px;
  overflow: hidden;
`;

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  console.log(article.publishedAt);
  return (
    <Card className="card-item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="217"
          image={article.imageUrl}
          alt={article.newsSite}
        />
        {article.publishedAt && <DateComponent date={article.publishedAt} />}
        <CardContent className="card-content">
          <TitleTypography gutterBottom variant="h5">
            {article.title}
          </TitleTypography>
          <SummaryTypography
            variant="body2"
            color="text.secondary"
            className="card-content__summary"
          >
            {article.summary}
          </SummaryTypography>
        </CardContent>
      </CardActionArea>
      <Link to={`/detail/${article.id}`} className="link">
        <div className="link__title">Read more</div>
        <img src={arrowRight} alt="arrow-right" className="link__img" />
      </Link>
    </Card>
  );
};
