import React, { useEffect, useState } from "react";
import { MemeCard } from "./memeCard";
import DummyCard from "./dummyCard";
export const ShimmerUI = () => {
  const [memes, setMemes] = useState<any[]>([]);
  const [showShimmer, setShowShimmer] = useState<boolean>(false);
  async function fetchMemes() {
    setShowShimmer(true);
    const resp = await fetch("https://meme-api.com/gimme/20");
    const data = await resp.json();
    setMemes(() => [...memes, ...data.memes]);
    setShowShimmer(false);
  }
  function handleScroll() {
    if (window.scrollY + window.innerHeight === document.body.scrollHeight) {
      console.log(
        window.scrollY + window.innerHeight + 5,
        document.body.scrollHeight
      );
      !showShimmer && fetchMemes();
    }
  }
  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {memes.map((item: any) => {
          return <MemeCard key={item.url} memeData={item} />;
        })}
        {showShimmer && <DummyCard />}
      </div>
    </>
  );
};
