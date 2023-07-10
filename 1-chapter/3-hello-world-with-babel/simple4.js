// npx babel --watch src --out-dir . --presets @babel/preset-react
// src폴더안의 js파일을 preset-react 프리셋을 이용하여 변환 후
// 현재 폴더에 같은 이름의 js파일을 생성
// watch를 통해 변화를 감지
function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}
function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}
const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);