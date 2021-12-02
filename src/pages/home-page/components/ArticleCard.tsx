import React, { FC } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IArticle } from '../../../types/types';

export interface ArticleCardProps {
  article: IArticle;
}

export const ArticleCard: FC<ArticleCardProps> = ({article}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={article.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.newsSite}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
