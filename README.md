# GIST_House_Market: DangMooG

지스트 하우스연합회 중고장터가 (하우스 위원들을 갈아 넣은) 수작업으로 이루어지는 것을 보고, 이를 개선하고자 하우스 장터 전산화 프로젝트를 진행한다.

이에 더불어, 기숙사 학교(ex-GIST, DGIST)로의 확장을 염두에 두고 기숙사 특화형 중고 장터로의 발전을 고려하고 있다.

프로토타입은 React + Node.js + TensorFlow.js로 작업할 예정이며, 합류 팀원의 기술스택에 따라 약간씩 수정이 이루어질 예정이다.

여력이 된다면 ReactNative로 앱까지 구동시킬 계획을 가지고 있다.

100% 비영리 프로젝트로, 추후 학교에 서버 비용만을 청구하고 프로젝트를 넘겨주고자 한다.

해당 프로젝트의 라이센스는 <a href="https://github.com/KevinTheRainmaker/DangMooG/blob/main/LICENSE">MIT License</a>의 내용을 따른다.

---

## 팀원

> 고강빈 (GIST, 19) - Project Owner
> 
> 김동우 (GIST, 20) - 22.04.07 합류
> 
> 배정윤 (DGIST,17) - 22.04.07 합류
> 
> 김민국 (GIST, 16) - 22.05.14 합류
> 
> 장원식 (GIST, 17) - 22.05.14 합류

#### ML Engineer

> 고강빈 (Lead)
> 
> 김동우

#### FE

> 김민국 (Lead)
> 
> 고강빈
> 
> 김동우

#### BE

> 장원식 (Lead)
> 
> 고강빈
> 
> 김동우

#### App Dev

> 김민국

#### Designer

> 배정윤

---

## 회의록

> 22.04.07 5:45PM ~ 7:00PM

- 2 Track으로 진행
  >
      Track 1. 상시 운영되는 개인간 중고거래 장터
      Track 2. 시즌별로 운영되는 하우스 주관 장터: 창고 개방 및 거래 중개
  >
- 일단은 중고거래 자체에 집중 후 공동구매, 택시동승자 모집 등 추가 기능은 추후에 논의하여 확장하는 걸로

<br>

> 22.04.14 5:00PM ~ 6:00PM

- 웹 페이지에서 채팅 기능은 의미가 없음

  - 차라리 쪽지나 메일은 어떤지?

- 배너에는 자치회 이벤트나 신기능 출시에 대한 광고만 달아도 쓸만할 듯

<br>

> 22.04.23 3:00PM ~ 4:45PM

- 개인적인 욕심: ML을 활용할 수 있는 방안이 있었으면 함

  - 추천은 기본적인 쿼리 기반으로만 수행해도 됨
  - 사기 탐지나 혐오 탐지 등 적절한 방안 구상이 필요함

- 기숙사라는 차별점을 최대한 살리는 것이 관건
  >
      중고 장터 / 공동 구매 / 물품 대여 및 보관 / 동승자 모집
  >
- 앱으로 만드는 것이 맞다고 봄
  - 앱 개발자 추가 모집 필요
  - 정윤: 관련 경험도 있으니, 플로우 차트 구축해보겠음

<br>

> 22.05.06 5:00PM ~ 6:30PM

- 결제, 송금 기능이 없다면, 굳이 우리 플랫폼을 이용할 이유가 명확하지 않다.

  - 카카오페이, 토스페이먼츠 등 이용 가능한 API 서비스가 있는지 탐색이 필요

- 공동 구매 물품에 대한 검열을 해야하는가?

  - 해야한다 > 선정적이거나 문제가 될 소지가 있는 물품에 대한 감시 기능이 필요할 것
  - 하지 않아도 된다 > 우리는 중개를 해줄뿐 딱히 책임 소재가 없다
    - 물론 맞는 말이지만, 관리가 전혀 안될 경우 플랫폼의 존속 자체에 문제가 생길 수 있다

- 공동 구매와 동승자 모집은 통합을 고려해볼만하지만, 택시 등 일부 항목에 대해서는 분리가 필요하다

  - 택시는 출발 시간, 짐의 양도 중요하고 이용 후 정산이 이루어진다는 특수성도 있기 때문에 결 자체가 다르다
  - 플로우 차트를 짜보고, 어떤 식으로 구성할지는 차차 생각해보기로

- 디자인 드래프트를 만들어서 이야기 나눠보자.

<br>

> 22.05.14 2:00PM ~ 3:45PM

- 결제/송금 기능은 개발 로드도 많고 개발 외적으로도 신경 써야할 것이 많다
  - 그냥 거래가 성사되면 계좌번호를 복사할 수 있게 하면 어떤지?

- 중고거래 / 공동 구매에 대한 검열은 불법적인 것만 이루어지지 않게 하면 될 것 같다
  - 공동구매는 정상 판매자로부터 공급되는 것이므로 불법 문제는 딱히 없을 것
  - 이용자 신고 기능을 넣어 일정 수 이상 신고가 누적되면 일시 블락 & 관리자에게 알람 정도로만 처리하자
  - 추후 이용자가 많이 늘어나서 관리자가 처리할 수 없는 수준이 되면 그때 가서 누적 신고 데이터를 이용해 만들어도 될 듯

- 사기 의심 거래글에 대한 사기 탐지는 있으면 좋겠으나 돈이 너무 많이 든다 (10만건 API 이용 금액 약 400만원)
  - 사실 없어도 되는 기능이나, 개인적인 욕심 때문에 있으면 좋겠다는 의견
  - 스마일게이트가 최대 500을 지원해주니 일단 지원은 해보자. 11월까지 개발하는거면 그렇게 여유가 없는 것도 아닌 것 같다

- 물품 대여 및 보관, 동승자 모집 등 기타 서비스는 자유로운 게시글 형식으로 이루어질 수 있게만 하자
  - 하우스 장터를 통해 수요가 입증된 중고 장터, 공동 구매와 달리, 다른 서비스는 수요가 입증이 안되었으며 약간 '한철 장사' 느낌이 강하게 들 것 같다
  - 일단 적은 개발 로드로 간단하게만 관리하고, 추후 니즈가 파악되어 고도화가 필요하다고 생각되면 그때 진행하자

- 결론: 중고장터 / 공동 구매에 집중해서 진행하자. 스마일 게이트 지원서는 조만간 공유 예정

<br>

> 22.05.23 8:20PM ~ 10:00PM

- 결제 기능은 보류하는 것으로 확정
  - 추후 사용자가 많아지고 니즈가 생기면 그때 천천히 적용하는 방향으로 진행

- 프로덕트 네이밍 '도토릿'으로 변경
  - 기숙사를 뜻하는 Dormitory를 연상시키는 도토리에 귀여움을 더한 네이밍
  ![도토릿-프로토 (2)](https://user-images.githubusercontent.com/76294398/169824740-d931d2cd-f7cb-42f1-94ed-3f3b081334a8.png)

- 중고장터 / 공동 구매 / 자유 게시판 총 3개 카테고리로 진행

- 회의시간 매주 월요일 10:00PM으로 고정 & 개발 본격적인 시작은 6월말~7월초 (희망 완료 기한 8월말)

<br>

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

위 오류(?)를 처리하기 위해 서버와 클라이언트 폴더를 분리했고, Heroku와 Vercel을 이용하여 배포하였다.

~클라이언트 레포지토리: https://github.com/KevinTheRainmaker/DangMooG-client~

~배포: https://dang-moo-g-client.vercel.app/~
