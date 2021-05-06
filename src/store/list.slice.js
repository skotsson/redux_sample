import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'news',
  initialState: { news: [{ title: 'Enter search term to populate.' }] },
  reducers: {
    updateNews(state, action) {
      const updatedNews = action.payload;
      state.news = updatedNews;
    },
  },
});

export const fetchNews = (searchTerm) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`,
      );

      if (!response.ok) {
        throw new Error('Could not fetch newsfeed');
      }
      const data = await response.json();
      return data;
    };

    try {
      const news = await fetchData();
      dispatch(listActions.updateNews(news.hits));
    } catch (error) {
      alert(`Could not fetch newsfeed because ${error}`);
    }
  };
};

export const listActions = listSlice.actions;

export default listSlice;
