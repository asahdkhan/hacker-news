import PropTypes from "prop-types";
import moment from "moment";
import "./style.scss";

const ArticleItems = ({ title, text, url, time, comments }) => {
  const showArticle = () => window.open(url, "_blank");

  /* Convert Unix time to time ago */
  moment.fn.minutesFromNow = function () {
    return Math.floor((+new Date() - +this) / 60000) + " mins ago";
  };

  /* In most cases text is not defined & in somecases it's a HTML
    Showing dummy desc.
    Added article URL on click
  */
  return (
    <div className="article-item" onClick={showArticle}>
      <article>
        <h2>{title}</h2>
        <h3>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, …when an unknown printer took a galley of type and scrambled
        </h3>
        <span>
          <img src="/svg/clock.svg" alt="clock" />
          {/* Passing article time */}
          <h4>{moment.unix(time).minutesFromNow()}</h4>
          <div />
          <h4>{comments ? comments + " comments" : "No comments"}</h4>
        </span>
      </article>
    </div>
  );
};

ArticleItems.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default ArticleItems;
