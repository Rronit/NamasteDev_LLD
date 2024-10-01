import React from "react";

export const MemeCard = (props: any) => {
  const { memeData } = props;
  const { url, author, title } = memeData;

  return (
    <div
      style={{
        margin: 20,
        height: 300,
        width: 200,
        background: "lightgreen",
        overflow: "hidden"
      }}
    >
      <img alt="meme here" src={url} style={{ height: 200, width: 200 }} />
      <div style={{ padding: 5, background: "lightblue" }}>
        Author: {author}
      </div>
      <div style={{ padding: 5, background: "lightgreen" }}>Title: {title}</div>
    </div>
  );
};
