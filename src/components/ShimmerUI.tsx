import React, { useEffect, useState } from "react";
import { MemeCard } from "./memeCard";
import DummyCard from "./dummyCard";
export const ShimmerUI = () => {
  const [memes, setMemes] = useState<any[]>([]);
  async function fetchMemes() {
    const resp = await fetch("https://meme-api.com/gimme/20");
    const data = await resp.json();
    console.log(data.memes);
    setMemes(data.memes);
  }
  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {memes.length > 0 ? (
          memes.map((item: any, idx: number) => {
            console.log(typeof item, item, idx);
            return <MemeCard key={item.url} memeData={item} />;
          })
        ) : (
          <DummyCard />
        )}
      </div>
    </>
  );
};
