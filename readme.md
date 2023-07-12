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


## 1.3 create-react-app으로 시작하기
    create-react-app은 리액트로 웹 애플리케이션을 만들기 위한 환경을 제공
    장점
    1. 개발 환경을 자동으로 구축
        -바벨,웹팩
        -테스트 시스템
        -HRM(hot-module-replacement)
        -ES6+문법
        -CSS 후처리
    2. 해결법이 여러가지 일때, 합리적인 선택
        - 각각의 장단점을 공부하기에는 시간이 많이 소요
        - 합리적인 선택을 했을 확률이 높다.


### 1.3.1 create-react-app 사용해 보기
```
    npx create-react-app . 
    - 현재폴더에 리액트 설치 해줌    

    HMR을 통해 수정된 부분을 바로 확인 가능
    
    index.js와 연결된 모든 JS파일, css파일은 src폴더 밑에 있어야함
    -> src폴더 바깥에 있는 파일을 import하면 실패

    index.html에서 참조하는 파일은 public 폴더 밑에 있어야 한다.
    -> js,css파일을 script태그, Link태그를 이용하여 연결
    
    index.html 직접연결보단 src폴더내에서 import를 통해 연결 지향
    -> JS파일,CSS파일의 경우 빌드 시 자동으로 압축되기 때문

    이미지,폰트도 src폴더밑에서 포함시키기
    -> 웹팩에서 해시값을 통해 url을 생성
    -> 브라우저 캐싱 효과

    페이지별로 제목을 다르게 줘야할 경우
    -> 검색 엔진 최적화가 필요없다면 react-helmet과 같은 패키지 사용
    -> 필요하다면 Next.js 고려

    PWA는 오프라인에서도 동작하는 웹 애플리케이션을 만들기 위한 기술
    -> 기본적으로 꺼져 있음
    
```

### 1.3.2 주요 명령어 알아보기
    개발 모드로 실행하기
    - npm start
        -> HMR이 동작함
    - https로 실행하는 옵션 제공
        -> 자체 서명된 인증서 제공
        window: set HTTPS=true && npm start
        mac: HTTPS=true npm start
    빌드하기
    - npm run build
        -> 배포 환경에서 사용할 파일 만들어줌
    
    - css파일 저장 경로
        -> build/static/css/main.{해시값}.chunk.css
        -> 여러개의 css파일을 import해도 모두 위의 경로에 저장
    - 리소스 저장 경로(이미지,폰트)
        -> build/static/media
        -> 10kb 보다 작으면 위 경로가 아닌 data url 형식으로 JS파일에 포함

    테스트 코드 실행
    - npm test

    설정 파일 추출하기
    - npm run eject
        -> 숨겨져있던 CRA의 내부 설정 파일이 밖으로 노출
        -> 리액트 툴체인에 익숙한 사람이아니라면 비추천
    - react-scripts 프로젝트를 fork해서 나만의 스크립트를 만들기
    - react-app-rewired 패키지 사용

    - 버전이 올라갈때 변경된 내용을 쉽게 적용할 수 없다는 단점

### 1.3.3 자바스크립트 지원 범위
    ES6의 모든 기능을 지원
    - 지수 연산자
    - async await
    - rest opertator, spread operator
    - dynamic import
    - class field
    - jsx 문법
    - 타입스크립트, 플로 타입 시스템

    기본설정에서는 아무런 폴리필도 포함하지않음

    폴리필
    - 브라우저나 자바스크립트 엔진에서 원래 지원하지 않는 기능을 스크립트를 통해 구현하는 것
    - 객체나 함수를 주입할 때, 그것이 현재 환경에 이미 존재하는지 검사해야 한다 
        -> 만약 해당 기능이 이미 환경에서 지원되고 있다면 폴리필을 사용할 필요가 없다.
        -> 이미 존재하는 기능 위에 똑같은 기능을 덮어쓰면 에러 발생 가능성 있다.

### 1.3.4 코드 분할하기
    사용자에게 필요한 양의 코드만 내려줌
    - 코드 분할 하지않으면 전체 코드를 한번에 내려주기 때문에 첫 페이지가 뜨는 시간이 오래 걸린다.

### 1.3.5 환경 변수 사용하기
    빌드 시점에 환경 변수를 코드로 전달
    process.env.{환경 변수 이름}

    NODE_ENV 환경 변수
    CRA는 NODE_ENV를 기본으로 제공
    - npm start : development 환경
    - npm test : test 환경
    - npm run build : production 환경       

    기타 환경 변수 이용하기
    react는 REACT_APP_접두사를 붙여야함
    process.env.REACT_APP_ 
    
    .env.{환경이름}
    - .env파일을 이용하여 환경별 환경변수를 관리

    autoprefixer
    - CSS를 작성할 때 브라우저 간의 호환성을 위해 필요한 벤더 접두사(vendor prefix)를 자동으로 추가해주는 툴
    - build 실행 후 css파일을 열어보면 벤더 접두사가 추가되어있다.
    


