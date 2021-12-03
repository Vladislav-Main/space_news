import './detailedArticle.scss';

import React, { FC } from 'react';
import { IArticle } from '../../../../types/types';
import { Link } from 'react-router-dom';
import { ArticleBody } from '../article-body/ArticleBody';

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
          <ArticleBody title={article.title} summary={article.summary} />{' '}
          <div className="article__button">
            <Link to="/" className="link">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
