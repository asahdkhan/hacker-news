/* Implementated Article List logic */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ArticleItems from "../../components/ArticleItems";
import useArticle from "../../hooks/useArticle";

/* Get previous article list */
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
const ArticleList = ({ dataLoad }) => {
  const { articleState, getArticle } = useArticle();
  const prevList = usePrevious(articleState?.list);

  /* Load articles if the list is updated*/
  useEffect(() => {
    if (prevList !== articleState?.list) {
      getArticle(articleState?.list?.slice(dataLoad, dataLoad + 5));
    }
  }, [prevList, articleState, dataLoad, getArticle]);

  /* Load next 5 articles*/
  useEffect(() => {
    getArticle(articleState?.list?.slice(dataLoad, dataLoad + 5));
  }, [dataLoad, getArticle]);

  return (
    <>
      {articleState?.articles?.map((item) => {
        const { id, title, url, time, kids, text } = item;
        return (
          <ArticleItems
            key={id}
            title={title || ""}
            text={text || ""}
            url={url || ""}
            time={time || null}
            comments={kids?.length || 0}
          />
        );
      })}
    </>
  );
};

ArticleList.propTypes = {
  dataLoad: PropTypes.number.isRequired,
};

export default ArticleList;
