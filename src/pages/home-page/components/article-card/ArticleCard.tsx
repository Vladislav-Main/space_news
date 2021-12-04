import { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/system';
import Highlighter from 'react-highlight-words';

import './articleCard.scss';
import { IArticle } from '../../../../types/types';
import { DateComponent } from './date-component/DateComponent';
import { useAppSelector } from '../../../../hooks/useRedux';
import {
  ButtonLink,
  Direction,
} from '../../../../ui-components/buttons/ButtonLink';

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
  height: 60px;
  overflow: hidden;
`;

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const query = useAppSelector((state) => state.articleReducer.searchTerm);
  return (
    <Card className="card-item">
      <Link to={`/detail/${article.id}`}>
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
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={article.title}
              />
            </TitleTypography>
            <SummaryTypography
              variant="body2"
              color="text.secondary"
              className="card-content__summary"
            >
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={article.summary}
              />
            </SummaryTypography>
          </CardContent>
        </CardActionArea>
        <ButtonLink link={`/detail/${article.id}`} variant={Direction.right}>
          Read more
        </ButtonLink>
      </Link>
    </Card>
  );
};
