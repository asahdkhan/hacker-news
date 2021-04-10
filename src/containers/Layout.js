/* Layout of the Application 
   Also container is wrap by article provider
*/
import ArticleProvider from "../context/ArticleContext";
import Article from "./article/Article";
import "./Layout.Style.scss";

const Layout = () => {
  return (
    <div className="container">
      <header className="app-header">
        <img src="/svg/mainLogo.svg" alt="logo" />
      </header>
      <ArticleProvider>
        <Article />
      </ArticleProvider>
      <footer className="app-footer">
        <img src="/svg/footerLogo.svg" alt="logo" />
      </footer>
    </div>
  );
};

export default Layout;
