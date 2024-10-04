import React from "react";

export default function Comment({ data }: any) {
  const { username, comment, replies } = data;
  return (
    <div
      style={{
        margin: 10,
        marginTop: 25,
        paddingLeft: 0,
        borderLeft: "1px solid grey"
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src="https://styles.redditmedia.com/t5_2qh1q/styles/communityIcon_d625ty2hw24d1.png"
          alt="profile pic"
          style={{
            height: 35,
            width: 35,
            borderRadius: "50%",
            border: "1px solid grey"
          }}
        />
        <div style={{ paddingLeft: 10 }}>
          <p style={{ marginTop: 2 }}>{username}</p>
          <p>{comment}</p>
        </div>
      </div>
      {replies && (
        <div style={{ paddingLeft: 50 }}>
          {/* {replies.map((reply:any)=><Comment data={reply})} */}
          {replies.map((reply: any) => {
            return <Comment data={reply} />;
          })}
        </div>
      )}
    </div>
  );
}
