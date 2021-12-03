import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isBlock } from 'typescript';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { selectAllEntities } from '../../store/reducers/ArticlesSlice';
import { fetchArticles } from '../../store/reducers/AsyncThunk';
import { IArticle } from '../../types/types';
import { Loader } from '../../ui-components/loader/Loader';
import { ArticleList } from './components/article-list/ArticleList';
import { SearchInput } from './components/search-input/SearchInput';
import './home.scss';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { status, isLoading, error } = useAppSelector(
    (state) => state.articleReducer
  );
  console.log(error);
  const data = useSelector(selectAllEntities);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  return (
    <div className="home-page _container">
      <div className="home-page__search-block detailed-page">
        <div className="search-block__title">Filter by keywords</div>
        <div className="search-block__input">
          <SearchInput />
        </div>
      </div>
      {isLoading && (
        <div className="home-page__loader-block">
          <Loader />
        </div>
      )}
      {error && <div className="home-page__loader-block">{error}</div>}
      {data && !isLoading && !error && (
        <div className="home-page__results-block">
          <ArticleList articles={data} />
        </div>
      )}
    </div>
  );
};
