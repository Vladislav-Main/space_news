import { FC } from 'react';

import './articleList.scss';
import { IArticle } from '../../../../types/types';
import { ArticleCard } from '../article-card/ArticleCard';

interface ArticleListProps {
  articles: IArticle[];
}

export const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="results-block">
      <div className="results-block__results-length">
        <p>Results: {articles.length}</p>
      </div>
      <div className="results-block__results-items">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
