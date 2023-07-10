function LikeButton() {
  // React 변수는 react.development.js에서 전역변수로 생성됨
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    // createElement 함수는 리액트 요소를 반환
    //, 여기서는 button 돔 요소가 된다
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}

const domContainer = document.querySelector("#react-root");

// react-dom.development에서 만든 ReactDOM 변수를 사용해서
// 우리가 만든 컴포넌트를 react-root돔 요소에 붙인다.
ReactDOM.render(React.createElement(LikeButton), domContainer);

