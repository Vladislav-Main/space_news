import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './home.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import {
  articleSlice,
  selectAllEntities,
} from '../../store/reducers/ArticlesSlice';
import { fetchArticles } from '../../store/reducers/AsyncThunk';
import { Loader } from '../../ui-components/loader/Loader';
import { ArticleList } from './components/article-list/ArticleList';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.articleReducer);
  const data = useSelector(selectAllEntities);
  const query = useAppSelector((state) => state.articleReducer.searchTerm);

  const filtered = data
    .filter((item: any) => {
      if (item.title.includes(query)) {
        return { ...item, priority: 2 };
      } else if (item.summary.includes(query)) {
        return { ...item, priority: 1 };
      } else {
        return 0;
      }
    })
    .sort((a, b) => {
      if (a.priority > b.priority) return 1;
      if (a.priority < b.priority) return -1;
      return 0;
    });

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return (
    <div className="home-page _container">
      <div className="home-page__search-block detailed-page">
        <div className="search-block__title">Filter by keywords</div>
        <div className="search-block__input">
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: 600,
              marginRight: 10,
            }}
          >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={(e) =>
                dispatch(
                  articleSlice.actions.setSearchTerm(e.target.value as string)
                )
              }
            />
          </Paper>
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
          <ArticleList articles={filtered} />
        </div>
      )}
    </div>
  );
};
