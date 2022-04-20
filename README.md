# GIST_House_Market: DangMooG

지스트 하우스연합회 중고장터가 (하우스 위원들을 갈아 넣은) 수작업으로 이루어지는 것을 보고, 이를 개선하고자 하우스 장터 전산화 프로젝트를 진행한다.

이에 더불어, 기숙사 학교(ex-GIST, DGIST)로의 확장을 염두에 두고 기숙사 특화형 중고 장터로의 발전을 고려하고 있다.

프로토타입은 React + Node.js + TensorFlow.js로 작업할 예정이며, 합류 팀원의 기술스택에 따라 약간씩 수정이 이루어질 예정이다.

여력이 된다면 ReactNative로 앱까지 구동시킬 계획을 가지고 있다.

100% 비영리 프로젝트로, 추후 학교에 서버 비용만을 청구하고 프로젝트를 넘겨주고자 한다.

해당 프로젝트의 라이센스는 <a href="https://github.com/KevinTheRainmaker/DangMooG/blob/main/LICENSE">MIT License</a>의 내용을 따른다.

---

## 팀원

### ML Engineer

> 고강빈 (GIST, 19) - Project Owner

### FE

> 김동우 (GIST, 20) - 22.04.07 합류

### BE

> (공석)

### Designer

> 배정윤 (DGIST,17) - 22.04.07 합류

---

## 회의록

> 22.04.07 5:45PM ~ 7:00PM

- 2 Track으로 진행
  >
      Track 1. 상시 운영되는 개인간 중고거래 장터
      Track 2. 시즌별로 운영되는 하우스 주관 장터: 창고 개방 및 거래 중개
  >
- 일단은 중고거래 자체에 집중 후 공동구매, 택시동승자 모집 등 추가 기능은 추후에 논의하여 확장하는 걸로

---

## CHANGELOG.md

https://github.com/KevinTheRainmaker/DangMooG/blob/main/CHANGELOG.md

---

## API Docs

| Index | Method | URI           | Description                                   |
| ----- | ------ | ------------- | --------------------------------------------- |
| 1     | GET    | /products     | 모든 상품을 생성일자 역순으로 정렬하여 가져옴 |
| 2     | POST   | /products     | 상품 업로드                                   |
| 3     | GET    | /products/:id | 특정 id의 상품을 가져옴                       |
| 4     | POST   | /image        | 상품 이미지 등록                              |
| 5     | GET    | /banners      | 배너 이미지 불러오기                          |

---

## Error Archive

---

```
$ npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
```

> sudo chown -R 맥북유저이름: 에러경로

---

```
$ Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
```

> 방어 코드에 의해 res.send가 동작했으나 이후 catch문 내 res.send에 의해 다른 응답을 보내려고 시도하게 되어 서버가 충돌하며 발생하는 에러

> 방어코드 내 res.send에 return을 추가해주면 된다.

---

```
remote: Building source:
remote:
remote: -----> Building on the Heroku-20 stack
remote: -----> Determining which buildpack to use for this app
remote:  !     No default language could be detected for this app.
remote:                         HINT: This occurs when Heroku cannot detect the buildpack to use for this application automatically.
remote:                         See https://devcenter.heroku.com/articles/buildpacks
```

> heroku에 node 서버를 배포하고자하였으나 에러가 발생하여 배포가 실패하였음
> buildpack을 명시해주고자 다음 명령어 실행

```
heroku buildpacks:set heroku/nodejs
```

> 그러나 다음과 같은 에러 발생

```
remote: -----> Building on the Heroku-20 stack
remote: -----> Using buildpack: heroku/nodejs
remote: -----> App not compatible with buildpack: https://buildpack-registry.s3.amazonaws.com/buildpacks/heroku/nodejs.tgz
remote:
remote:  !     ERROR: Application not supported by 'heroku/nodejs' buildpack
remote:  !
remote:  !     The 'heroku/nodejs' buildpack is set on this application, but was
remote:  !     unable to detect a Node.js codebase.
remote:  !
remote:  !     A Node.js app on Heroku requires a 'package.json' at the root of
remote:  !     the directory structure.
remote:  !
remote:  !     If you are trying to deploy a Node.js application, ensure that this
remote:  !     file is present at the top level directory. This directory has the
remote:  !     following files:
remote:  !
remote:  !     CHANGELOG.md
remote:  !     LICENSE
remote:  !     node-folder/
remote:  !     pyproject.toml
remote:  !     react-folder/
remote:  !     README.md
remote:  !
remote:  !     If you are trying to deploy an application written in another
remote:  !     language, you need to change the list of buildpacks set on your
remote:  !     Heroku app using the 'heroku buildpacks' command.
remote:  !
remote:  !     For more information, refer to the following documentation:
remote:  !     https://devcenter.heroku.com/articles/buildpacks
remote:  !     https://devcenter.heroku.com/articles/nodejs-support#activation
remote:
remote:
remote:        More info: https://devcenter.heroku.com/articles/buildpacks#detection-failure
```

> 아마 react 코드와 node 코드의 저장소가 분리되어 있지 않아 발생한 문제가 아닐까 생각됨
> buildpack 제거

```
heroku buildpacks:remove heroku/nodejs
```
