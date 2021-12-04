import { FC, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import './about.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { selectEntityById } from '../../store/reducers/ArticlesSlice';
import { fetchArticles } from '../../store/reducers/AsyncThunk';
import { IArticle } from '../../types/types';
import { ButtonLink, Direction } from '../../ui-components/buttons/ButtonLink';
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

  return (
    <>
      {state && <DetailedArticle article={state} />}
      {!state && (
        <div className="error-page">
          <div className="error-page__message">
            <span>Unfortunatly this page is not found :(</span>
            <p>Please choose the news from homepage!</p>
            <ButtonLink link={`/`} variant={Direction.left}>
              Back to homepage
            </ButtonLink>
          </div>
        </div>
      )}
    </>
  );
};
