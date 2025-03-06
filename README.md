# Capstone Project
아래 설명을 따라 설치하고 실행할 수 있습니다.
해당 프로젝트는 **React + TailwindCSS**를 사용하여 개발되었습니다.

---
## 1. 프로젝트 다운로드
```sh
git clone https://github.com/day-e0n/capstone.git
cd capstone
```


## 2. Node.js 및 npm 설치
```sh
node -v
npm -v
```

이 명령어를 실행 했을 때 버전이 출력되면 이미 설치된 것이므로 다음 단계로 이동
(만약 버전 문제가 있다면 맨 아래 오류 해결 방법을 참고)


## 3. 의존성 패키지 설치
```sh
npm install
or
yarn install
```

## 4. 프로젝트 실행
```sh
npm start
or
yarn start
```
---

## 서버에서 실행하는 경우
package.json 파일 내의 scripts 부분을 수정해야 함
```
"scripts": {
    <u> "start": "HOST=0.0.0.0 react-scripts start", </u>
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
```
http://서버IP:3000
```
위와 같이 서버에 접속

---

## 에러 해결 방법
### 1. npm ERR! Error: EACCES: permission denied
```
sudo chown -R $USER:$USER .
npm install
```

### 2. SyntaxError: Unexpected token '.'
이 에러는 보통 Node.js 버전이 너무 낮거나, tailwind.config.js 파일에 문제가 있을 때 발생

기존 npm 지워줘야 함
```
sudo apt remove -y nodejs npm
sudo apt autoremove -y

node -v
```

호환되는 v18로 다시 다운
```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

node -v
npm -v
```


# React에 대한 자세한 설명
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
