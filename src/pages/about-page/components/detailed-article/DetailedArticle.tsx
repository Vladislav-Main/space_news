import { FC } from 'react';

import './detailedArticle.scss';
import { IArticle } from '../../../../types/types';
import { ArticleBody } from '../article-body/ArticleBody';
import {
  ButtonLink,
  Direction,
} from '../../../../ui-components/buttons/ButtonLink';

interface ArticleDetailedArticleProps {
  article: IArticle;
}

export const DetailedArticle: FC<ArticleDetailedArticleProps> = ({
  article,
}) => {
  return (
    <div className="detailed-page">
      <div className="detailed-page__main main">
        <img
          src={article.imageUrl}
          alt={article.newsSite}
          className="main__photo"
        />
        <div className="main__article article _container">
          <ArticleBody title={article.title} summary={article.summary} />
          <div className="article__button">
            <ButtonLink link={`/`} variant={Direction.left}>
              Back to homepage
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
