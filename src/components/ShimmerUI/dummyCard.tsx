import React from "react";

function DummyCard() {
  return (
    <>
      {Array(20)
        .fill(0)
        .map(() => (
          <div
            style={{
              margin: 20,
              border: "1px solid grey",
              height: 300,
              width: 200,
              background: "lightgray"
            }}
          ></div>
        ))}
    </>
  );
}

export default DummyCard;
