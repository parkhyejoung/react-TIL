# react
## 리액트설치명령 + vite
* `npm create vite@latest 생성프로젝트명 -- --template react`
* `cd 프로젝트명`
* `npm install`
* `npm run dev`


## 리액트 폴더 삭제명령어(평균 10~20초 정도 소요됨)
* `rm -r 삭제폴더명(안에서 XX 상위에서)`

# vite+리액트 설치 후 폴더와 파일 구조
* public , src/assets 이미지,동영상,폰트 등 외부파일 관리
* **src 폴더 내에 css , jsx(javascript xml) 리액트용 JS 확장문법**
* index.html 최상위(root) 위치이동금지,기본위치 그대로 사용
* .gitignore : 깃허브 업로드 시 업로드 안되는 보호파일 목록 (여기서 지우면 업로드됨)
* package.json, vite.config.js : 리액트 관련 설치 정보 및 세팅정보
-----
## jsx 파일 생성 후 다른 jsx 파일에 연결하는 방법
1. `App.jsx` 생성 후 `main.jsx`에 연결하고 싶다면?
2. `main.jsx` 의 시작줄에서 `import` 방식으로 외부 jsx에 연결해야한다.
* `import  컴포넌트명 from 'jsx상대경로'`;
* 컴포넌트명은 jsx파일의 이름과 동일하게 작성한다(대소문자 주의)
* import의 컴포넌트명은 앞으로 이 이름을 쓰겠다는 뜻의 변수 선언과 같다 . 호출은 별도 진행해야한다
3. (위) import 진행 후 원하는 렌더링 위치에 `<컴포넌트명 />`을 작성한다.
* `import App from './App.jsx'`라면 `<App />` 이렇게 작성한다.
4. `main.jsx`에서 컴포넌트로 연결한 `App.jsx`가 정상적으로 출력되며 리액트 프로그래밍이 진행된다. 
------
# jsx 기본 템플릿과 뜻
`
import 외부파일 불러오는위치
function 컴포넌트명(){
    추가 변수 작성위치
    return (
        <>
            추가HTML태그작성위치
        </>
    )
}
export default 컴포넌트명;
`
