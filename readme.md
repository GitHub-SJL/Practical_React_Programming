# 1.리액트 프로젝트 시작하기

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


### 1.2.3 웹팩의 기본 개념 이해하기
    웹팩: 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 도구

    1. 배포하기 좋은형태란?
    -> 파일들을 하나로 묶어줌
    -> 애플리케이션을 효율적으로 로딩할 수 있는 번들(bundle)로 만들어줌
    -> 브라우저에서 더 빠르게 로드되고 실행
    2  웹팩 사용하지않고 배포하면 어려운점
    -> 파일 관리와 의존성 복잡
    -> 번들링과 최적화 어려움
    -> 개발 환경 편의성

    웹팩은 ESM(ES6 모듈시스템), commonJS 둘다 지원

    결국 웹팩이 여러 자바스크립트 파일들을 번들링한 하나의 자바스크립트 파일을 HTML의 script 태그에 포함 시키면 된다.
### 1.2.4 웹팩 사용해 보기
```
npm install webpack webpack-cli react react-dom

웹팩 설치하고 기존에 react패키지를 직접 파일로 저장하는 방식 말고 npm으로 react 패키지 설치 

button 컴포넌트를 만들고 다른 js파일에 불러와서 사용하여 웹팩을 사용하기 위한 환경 만들기
```

![image](https://github.com/GitHub-SJL/carrotmarket/assets/116176170/3275e671-d7fc-4bbc-af96-f48050974b62)

    npx webpeck을 통해
    dist 폴더 안에 Button.js와 index.js를 합친 main.js로 번들링이 완료