import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionBody(props: {
  data: any;
  isOpen: boolean;
  setOpenIndex: any;
  index: number;
}) {
  const { data, index, setOpenIndex, isOpen } = props;
  const { title, body } = data;

  console.log({ props });
  return (
    <>
      <div
        style={{
          background: "lightblue",
          padding: 5,
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer"
        }}
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        {title}
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {isOpen && <div style={{ marginTop: 15 }}>{body}</div>}
    </>
  );
}
