# 🏛️ Imdang Museum | 임당유적전시관 클론코딩

![React](https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)
![SCSS](https://img.shields.io/badge/-SCSS-FFAACD?logo=sass&style=for-the-badge)

> 홍주미의 포트폴리오 사이트입니다. react/next.js 를 활용하여 제작되었으며,
> GSAP를 활용하여 부드러운 스크롤 모션과 애니메이션을 적용하였습니다.

---

## Overview

- **프로젝트명:** 홍주미 포트폴리오 2025
- **개발기간:** 5일
- **개발인원:** 1인 (퍼블리싱 / 다자인 전담)
- **배포 URL:** [https://imdangmuseum.vercel.app](https://imdangmuseum.vercel.app)

---

## Tech

| 구분           | 사용 기술      |
| -------------- | -------------- |
| **Frontend**   | `React` `SCSS` |
| **Deployment** | `Vercel`       |

---

## Folder

```bash

app
├── components
│   ├── layout                       # 전역 레이아웃 관련
│   │   ├── header
│   │   └── footer
│   │
│   └── main                         # 메인 화면 구성 요소
│       ├── ContactText.js
│       ├── VisualEffect.js
│       ├── VisualText.js
│       └── WorkCard.js
│
├── styles
│   ├── font.scss                    # 폰트 스타일 정의
│   ├── style.scss                   # 메인 스타일
│   └── variables.scss               # 색상/폰트/반응형 변수
│
├── globals.scss                     # 전역 스타일 (Reset + 공통 레이아웃)
├── layout.js                        # 전체 레이아웃 파일
└── page.js                          # 메인 페이지 진입 파일

public
└── img                              # 이미지 리소스

```

## Getting Started

```bash
npm install
npm run dev
```

---

## License

_Copyright © 2025 Hong Jumi All rights reserved._
