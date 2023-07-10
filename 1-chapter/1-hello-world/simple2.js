function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}

// 3개의 돔요소에 LikeButton 컴포넌트 렌더링
ReactDOM.render(
  React.createElement(LikeButton),
  document.querySelector("#react-root1")
);
ReactDOM.render(
  React.createElement(LikeButton),
  document.querySelector("#react-root2")
);
ReactDOM.render(
  React.createElement(LikeButton),
  document.querySelector("#react-root3")
);
