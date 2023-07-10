// npx babel --watch src --out-dir . --presets @babel/preset-react
// src폴더안의 js파일을 preset-react 프리셋을 이용하여 변환 후
// 현재 폴더에 같은 이름의 js파일을 생성
// watch를 통해 변화를 감지
function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <div style={{ marginTop: 20 }}>
        <span>현재 카운트: </span>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );
}

const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);
