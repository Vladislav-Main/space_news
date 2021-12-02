import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IArticle } from '../../types/types';

export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IArticle[]>(
        'https://api.spaceflightnewsapi.net/v3/articles'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Something went wrong :(. Our team is already resolving the problem!'
      );
    }
  }
);
