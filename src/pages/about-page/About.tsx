import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { DefaultRootState } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { selectEntityById } from '../../store/reducers/ArticlesSlice';
import { fetchArticles } from '../../store/reducers/AsyncThunk';
import { IArticle } from '../../types/types';
import { DetailedArticle } from './components/detailed-article/DetailedArticle';

export const About: FC = () => {
  const dispatch = useAppDispatch();

  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();

  const [state, setState] = useState<IArticle>();

  const data = useAppSelector((state) => selectEntityById(state, id));

  useEffect(() => {
    if (data) {
      setState(data);
    } else {
      dispatch(fetchArticles());
      setState(data);
    }
  }, [data, dispatch]);

  return <div>{state && <DetailedArticle article={state} />}</div>;
};
