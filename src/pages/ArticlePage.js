import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCommentForm from "../components/AddCommentForm";
import ArticlesList from "../components/ArticlesList";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  let params = useParams();
  const name = params.name;
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
    // setArticleInfo({
    //   upvotes: Math.ceil(Math.random() * 10),
    // });
  }, [name]);

  if (!article) {
    return <NotFoundPage />;
  }

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
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
