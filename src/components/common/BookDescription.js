import React from "react";

function Title({ title }) {
  return (
    <>
      <p className="title">{title}</p>
    </>
  );
}

function Author({ author }) {
  return <h5 className="authorName">- {author}</h5>;
}

export { Title, Author };
