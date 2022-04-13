import React from "react";

function Title({ title, className }) {
  return (
    <>
      <p className={className}>{title}</p>
    </>
  );
}

function Author({ author,className }) {
  return <h5 className={className}>- {author}</h5>;
}

export { Title, Author };
