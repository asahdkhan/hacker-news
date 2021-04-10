import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

/* Inital State */
const initialState = {
  list: [],
  articles: [],
  loading: false,
  error: null,
};

/* Handle State on dispatch */
const articleReducer = (state, { type, payload }) => {
  switch (type) {
    case "API_EVENTS_REQUEST":
      return { ...state, loading: true };

    case "ARTICLE_LIST_SUCCESS":
      return { ...state, loading: false, list: payload, articles: [] };

    case "ARTICLE_SUCCESS":
      return {
        ...state,
        loading: false,
        articles: [...state.articles, ...payload],
      };

    case "API_EVENTS_FAIL":
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

/* Article Context
   Article Provider serve the data to Article component
*/
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const useArticleState = useReducer(articleReducer, initialState);

  return (
    <ArticleContext.Provider value={[...useArticleState]}>
      {children}
    </ArticleContext.Provider>
  );
};

ArticleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ArticleProvider;
