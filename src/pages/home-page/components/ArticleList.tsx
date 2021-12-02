import { FC } from 'react';
import { IArticle } from '../../../types/types';
import { ArticleCard } from './ArticleCard';

import './UserList.css';

interface ArticleListProps {
  articles: IArticle[];
}

export const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="users-cards">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
