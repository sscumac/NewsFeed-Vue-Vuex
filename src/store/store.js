import { createStore } from "vuex";
import initialState from "../assets/data.json";

const initialNews = initialState.news.map((newsItem) => {
  return {
    ...newsItem,
  };
});

let idCounter = 3;

const store = createStore({
  state: {
    counter: 0,
    news: initialNews,
  },
  mutations: {
    ADD_NEWS_ITEM(state, newsItem) {
      let id = idCounter++;
      const newItem = {
        ...newsItem,
        id: id.toString(),
      };
      state.news.push(newItem);
    },
    DELETE_NEWS_ITEM(state, itemToBeDeleted) {
      const news = [...state.news];
      const index = news.findIndex((item) => item.id === itemToBeDeleted.id);
      news.splice(index, 1);
      state.news = news;
    },
    UPDATE_NEWS_ITEM(state, itemToBeUpdated) {
      const news = [...state.news];
      const index = news.findIndex((item) => item.id === itemToBeUpdated.id);
      news[index] = {
        ...news[index],
        ...itemToBeUpdated,
      };
      state.news = news;
    },
  },
  actions: {
    addNewNews(context, newsItem) {
      context.commit("ADD_NEWS_ITEM", newsItem);
    },
    deleteNewsItem(context, itemToBeDeleted) {
      context.commit("DELETE_NEWS_ITEM", itemToBeDeleted);
    },
    updateNewsItem(context, itemToBeUpdated) {
      context.commit("UPDATE_NEWS_ITEM", itemToBeUpdated);
    },
  },
  getters: {
    news(state) {
      return state.news;
    },
    filteredByTitle: (state) => (searchWord) => {
      const searchWordNormalized = searchWord.toLowerCase();
      return state.news.filter(
        (item) => item.title.toLowerCase().indexOf(searchWordNormalized) > -1
      );
    },
    sortBy: (state, getters) => (searchWord, property, direction) => {
      return getters.filteredByTitle(searchWord).sort((a, b) => {
        if (a[property] > b[property]) {
          return direction === "asc" ? 1 : -1;
        }
        if (a[property] < b[property]) {
          return direction === "asc" ? -1 : 1;
        }
        return 0;
      });
    },
  },
});

export default store;
