import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvotes`, {
      method: "POST",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>Upvote</button>
      <p>This post has been upvotes {upvotes} times.</p>
    </div>
  );
};

export default UpvotesSection;
