import { useCallback, useContext } from "react";
import ajax from "./ajaxHelper";
import { ArticleContext } from "../context/ArticleContext";

const useArticle = () => {
  const [articleState, articleDispatch] = useContext(ArticleContext);

  // Get a list of articles based on story type
  const listArticles = useCallback(
    async (story) => {
      try {
        articleDispatch({ type: "API_EVENTS_REQUEST" });
        const req = story === "new" ? "newstories.json" : "showstories.json";
        const res = await ajax.get(req);
        articleDispatch({
          type: "ARTICLE_LIST_SUCCESS",
          payload: res.data,
        });
      } catch (error) {
        articleDispatch({ type: "API_EVENTS_FAIL", payload: error });
      }
    },
    [articleDispatch]
  );

  // Get article by Id
  const getArticle = useCallback(
    async (ids) => {
      try {
        articleDispatch({ type: "API_EVENTS_REQUEST" });
        // Performing request in a loop to get first 5 articles content,
        // whereas number of article request is dynamic
        const data = ids.map(async (v) => {
          const res = await ajax.get(`item/${v}.json`);
          return res.data;
        });
        Promise.all(data).then(function (values) {
          articleDispatch({
            type: "ARTICLE_SUCCESS",
            payload: values,
          });
        });
      } catch (error) {
        articleDispatch({ type: "API_EVENTS_FAIL", payload: error });
      }
    },
    [articleDispatch]
  );

  return {
    articleState,
    listArticles,
    getArticle,
  };
};

export default useArticle;
