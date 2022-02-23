import React from "react";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  let params = useParams();
  const name = params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) {
    return <NotFoundPage />;
  }

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Related Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;

// function ArticlePage1() {
//   let params = useParams();
//   return <h1>Article: {params.name}</h1>;
// }
