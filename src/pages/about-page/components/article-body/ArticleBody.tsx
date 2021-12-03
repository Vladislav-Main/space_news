import React, { FC } from 'react';
import './articleBody.scss';

interface IArticleBodyProps {
  title: string;
  summary: string;
}

export const ArticleBody: FC<IArticleBodyProps> = ({ title, summary }) => {
  return (
    <div className="article__body _container">
      <div className="article__title">{title}</div>
      <div className="article__summary">{summary}</div>
    </div>
  );
};
