import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'news',
  initialState: { news: [{ title: 'currently no search' }] },
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
        `http://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`,
      );

      if (!response.ok) {
        throw new Error('Could not fetch newsfeed');
      }
      const data = await response.json();
      console.log(data);
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
