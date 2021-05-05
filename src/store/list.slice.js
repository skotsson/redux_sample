import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  // initialState: [],
  initialState: { news: [] },
  reducers: {
    updateNews(state, action) {
      const updatedNews = action.payload;
      state.news = updatedNews;
    },
  },
});

export const fetchNews = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'http://hn.algolia.com/api/v1/search?query=foo&tags=story',
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
      dispatch(newsActions.updateNews(news.hits));
    } catch (error) {
      alert(`Could not fetch newsfeed because ${error}`);
    }
  };
};

export const newsActions = newsSlice.actions;

export default newsSlice;
