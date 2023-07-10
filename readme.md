#리액트 프로젝트 시작하기

## 1.1 리액트란 무엇인가?

    리액트는 UI 기능만 제공
    필요한 기능들은 개발자가 직접 구축
    - 전역 상태 관리
    - 라우팅
    - 빌드 시스템

    리액트 장점
    1. 가상돔을 통해 UI를 빠르게 업데이트
    -> 이전 UI상태와 변경될 UI의 최소 집합을 계산
    -> 사용하지않으면 브라우저 돔을 직접 업데이트 해야함

    2. 함수형 프로그래밍 적극 활용
    -> render 함수는 순수 함수로 작성
    (동일한 입력은 동일한 결과를 반환)
    (입력값에만 의존)

    -> state는 불변 변수로 관리
    (상태의 변경이 항상 새로운 객체를 생성하고 기존의 상태를 변경하지 않음을 의미)

## 1.2 리액트 개발 환경 직접 구축하기

    리액트의 툴체인(toolchain)을 이해하기 위해 한 번쯤 직접 구축해보기

### 1.2.1 Hello World 페이지 만들기

![image](https://github.com/GitHub-SJL/carrotmarket/assets/116176170/24932bce-e00f-4f61-a78a-2775fd4eb0b9)

1.  https://unpkg.com/react@16.14.0/umd/react.development.js
2.  https://unpkg.com/react@16.14.0/umd/react.production.min.js
3.  https://unpkg.com/react-dom@16.14.0/umd/react-dom.development.js
4.  https://unpkg.com/react-dom@16.14.0/umd/react-dom.production.min.js


    링크 1,3 개발환경 파일
    링크 2,4 배포 파일

    React 변수는 react.development.js에서 전역변수로 생성됨
    createElement 함수는 리액트 요소를 반환

    react-dom.development에서 만든 ReactDOM 변수를 사용해서
    우리가 만든 컴포넌트를 react-root돔 요소에 붙인다

### 1.2.2 바벨 사용해 보기

    자바스크립트 코드를 변환해주는 컴파일러
    용도
    1. 최신 문법을 사용하는 용도
    2. 코드 주석 제거
    3. 코드를 압축

    리액트에서는 JSX 문법을 사용하기위해 바벨 사용
    -> JSX 문법으로 작성된 코드를 createElement 함수를 호출하는 코드로 변환

    JSX문법으로 작성하면 마치 HTML 태그를 적는것 같아서 가독성이 훨씬 좋아진다.

```javascript
npm install @babel/core @babel/cli @babel/preset-react

@babel/cli -> 커맨드 라인에서 바벨실행
@babel/preset-react -> JSX 코드를 createElement 함수를 이용한 코드로 변환

npx babel --watch src --out-dir . --presets @babel/preset-react

src에 있는 모든 자바스크립트 파일을 @babel/preset-react 프리셋을 이용해서 변환 후
현재 폴더에 같은 이름의 자바스크립트 파일을 생성

```
