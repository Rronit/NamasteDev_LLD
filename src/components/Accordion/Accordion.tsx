import React, { useState } from "react";
import AccordionBody from "./AccordionBody";

const data: any[] = [
  {
    title: "header 1",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: "header 2",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: "header 3",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];

export default function Accordion() {
  const [openIndiex, setOpenIndex] = useState<number | null>(0);
  return (
    <>
      <div style={{ margin: "auto", width: "50%" }}>
        {data.map((item: any, idx: number) => {
          return (
            <div
              style={{
                padding: 20,
                margin: 5,
                border: "1px solid black",
                borderRadius: 4
              }}
            >
              <AccordionBody
                key={item.title}
                data={item}
                index={idx}
                isOpen={openIndiex === idx}
                setOpenIndex={setOpenIndex}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
