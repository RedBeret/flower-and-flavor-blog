import React from "react";
import BlogPost from "./BlogPost";
import "../index.css";
import notFoundImage from "../img/SearchResultNotFound.png";

const BlogList = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="container mx-auto mt-10">
        <div className="flex justify-center items-center">
          <img
            src={notFoundImage}
            alt="No posts found"
            className="w-full md:w-1/2 h-auto mx-auto mt-10"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {" "}
      <div className="blog-list">
        {posts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            date={post.date}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
