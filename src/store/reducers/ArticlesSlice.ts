import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { IArticle } from '../../types/types';
import { RootState } from '../store';
import { fetchArticles } from './AsyncThunk';

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

export const {
  selectAll: selectAllEntities,
  selectById: selectEntityById,
  selectIds: selectEntityIds,
} = articlesAdapter.getSelectors<RootState>((state) => state.articleReducer);

export const articleSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState({
    status: '',
    isLoading: false,
    error: '',
    searchTerm: '',
  }),
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: {
    [fetchArticles.pending.type]: (state) => {
      state.isLoading = true;
      state.status = 'loading';
    },
    [fetchArticles.fulfilled.type]: (
      state,
      action: PayloadAction<IArticle[]>
    ) => {
      articlesAdapter.setAll(state, action.payload);
      state.isLoading = false;
      state.error = '';
      state.status = 'success';
    },
    [fetchArticles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default articleSlice.reducer;
