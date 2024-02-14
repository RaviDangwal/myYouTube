import React from "react";

const commentsData = [
  {
    name: "Ravi Dangwal",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ravi Dangwal",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Ravi Dangwal",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Ravi Dangwal",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Ravi Dangwal",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Ravi Dangwal",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Ravi Dangwal",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Ravi Dangwal",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Ravi Dangwal",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ravi Dangwal",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ravi Dangwal",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ravi Dangwal",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ravi Dangwal",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12 rounded-full"
        alt="user"
        src="data:image/jpeg;base64,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"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
