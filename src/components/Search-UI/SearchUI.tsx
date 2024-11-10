import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")({
  padding: 2,
  "&:hover": {
    backgroundColor: "lightgrey" // Hover background color
    // color: "white" // Optional: change text color on hover for contrast
  }
});

export default function SearchUI() {
  const [respList, setRespList] = useState<string[]>([""]);
  const [query, setQuery] = useState<string>("");
  const [visibleResult, setVisibleResult] = useState<boolean>(false);
  const [cache, setCache] = useState<{ [key: string]: string[] }>({}); //cache
  const fetchData = async () => {
    if (cache[query]) {
      console.log(cache[query], ">>>>>>");
      setRespList(cache[query]);
    } else {
      const data = await fetch(
        `https://www.google.co.in/complete/search?q=${query}&client=firefox`
      );
      const json = await data.json();
      setRespList(json[1]);
      console.log({ ...cache, ...{ [query]: json[1] } });
      setCache(() => {
        return { ...cache, ...{ [query]: json[1] } };
      });
    }
  };
  useEffect(() => {
    if (!query) return;
    const s = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(s);
  }, [query]);

  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        value={query}
        style={{ width: 196, padding: 5 }}
        onChange={(e: any) => setQuery(e.target.value)}
        onFocus={() => {
          setVisibleResult(true);
        }}
        onBlur={() => {
          setVisibleResult(false);
        }}
      />
      {respList.length > 1 && visibleResult && (
        <ul
          style={{
            border: "1px solid grey",
            listStyleType: "none",
            width: 196,
            margin: 0,
            padding: 2
          }}
        >
          {respList.map((item: string, idx: number) => {
            return (
              <>
                <ListItem
                  key={idx}
                  onClick={() => {
                    setQuery(item);
                  }}
                >
                  {item}
                </ListItem>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
}
