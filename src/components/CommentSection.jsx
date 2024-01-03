import React, { useState } from "react";

const Comment = ({ text, replies }) => {
  const [expand, setIsExpand] = useState(false);
  const onChange = () => {
    setIsExpand((prev) => !prev);
  };
  return (
    <div>
      <span>{text}</span>
      {!!replies.length && (
        <span>
          <button
            style={{
              border: "none",
              background: "none",
            }}
            onClick={onChange}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-expand"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
              />
            </svg>
          </button>
        </span>
      )}
      {!!replies.length && (
        <ul style={{ paddingLeft: "20px" }}>
          {replies.map((reply, index) => (
            <div key={index} style={{ display: expand ? "block" : "none" }}>
              <Comment text={reply.text} replies={reply.replies} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

const CommentSection = () => {
  const comments = [
    {
      text: "Comment 1",
      replies: [
        { text: "Reply 1 to Comment 1", replies: [] },
        {
          text: "Reply 2 to Comment 1",
          replies: [
            {
              text: "Nested Reply to Reply 2",
              replies: [{ text: "Nested Reply to nested reply2", replies: [] }],
            },
          ],
        },
      ],
    },
    {
      text: "Comment 2",
      replies: [{ text: "Reply 1 to Comment 2", replies: [] }],
    },
    { text: "Comment 3", replies: [] },
  ];

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} text={comment.text} replies={comment.replies} />
      ))}
    </div>
  );
};

export default CommentSection;
