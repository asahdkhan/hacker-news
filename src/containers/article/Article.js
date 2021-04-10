/*  Article main conatiner */
import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import Button from "../../components/Button";
import useArticle from "../../hooks/useArticle";
import "./Article.Style.scss";

const Article = () => {
  const { articleState, listArticles, getArticle } = useArticle();
  const [load, setLoad] = useState(0);
  const [articleType, setArticleType] = useState("new");

  /*  Calling article list i.e Array of ids */
  useEffect(() => {
    listArticles(articleType);
  }, [listArticles]);

  /*  Change Article story type (new/past) */
  function onTypeChange(id) {
    if (id === articleType) return;
    listArticles(id);
    setArticleType(id);
  }

  return (
    <div className="article-list">
      <div className="btn-container">
        <Button
          id="new"
          label="New"
          styles={`btn ${articleType === "new" ? "active" : ""}`}
          handleClick={() => onTypeChange("new")}
        />
        <Button
          id="past"
          label="Past"
          styles={`btn ${articleType === "past" ? "active" : ""}`}
          handleClick={() => onTypeChange("past")}
        />
      </div>
      <ArticleList dataLoad={load} />
      {/* Currently article load is set to 5, onclick of load more*/}
      <Button
        id="load"
        label={articleState?.loading ? "Loading..." : "Load more"}
        styles="btn-load"
        handleClick={() => setLoad(load + 5)}
      />
    </div>
  );
};

export default Article;
