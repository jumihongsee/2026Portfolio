"use client";

import "./styles/style.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Silk from "./components/main/VisualEffect/VisualEffect";
import SplitText from "./components/main/VisualText/VisuaText";
import TiltedCard from "./components/main/WorkCard/WorkCard";
import ContactText from "./components/main/ContactText/ContactText";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const aboutRef = useRef();
  const worksRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    // Animation About
    gsap.from("#about .left-info .title-text", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    gsap.utils.toArray("#about .right-cont section").forEach((item) => {
      gsap.from(item, {
        y: 10,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animation Works
    gsap.from("#works .left-info .title-text", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: worksRef.current,
        start: "top 70%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    gsap.utils
      .toArray("#works .right-cont .tilted-card-figure")
      .forEach((item) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        });
      });

    // Animation Contact
    gsap.from("#contact .contact-deco-line", {
      opacity: 0,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "30% 70%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#contact .contact-txt-wrapper", {
      opacity: 0,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "30% 70%",
        end: "bottom center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  }, []);

  return (
    <>
      <main>
        <section id="visual" className="section" data-smooth-ignore>
          <Silk
            speed={5}
            scale={0.8}
            color="#4e37a9"
            noiseIntensity={1.5}
            rotation={0}
          />
          <SplitText
            text="Jumi's Portfolio !"
            delay={70}
            duration={2}
            tag={"h2"}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </section>
        <section id="about" className="section" ref={aboutRef}>
          <div className="inr">
            <div className="cont-wrapper">
              <div className="left-info">
                <div className="section-title-tag small-text">About</div>
                <h2 className="cont-title">
                  <span className="title-text">안녕하세요 !</span>
                  <span className="title-text"> 퍼블리셔</span>
                  <span className="title-text"> 홍주미 입니다.</span>
                </h2>
              </div>
              <div className="right-cont">
                <section id="about-me">
                  <p className="script-text">
                    3년간 웹 퍼블리셔로 근무하며 웹 디자인, 기획, 퍼블리싱을
                    아우르는 실무 경험을 쌓아 왔습니다.
                    <br />
                    사용자의 관점에 입각한 웹 UI를 디자인하고, 웹 표준과 웹
                    접근성을 준수한 마크업을 통해 모든 사용자가 편리하게 이용할
                    수 있는 웹사이트를 구현합니다.
                    <br /> <br />
                    현재는 React, Next.js 기술을 학습하며 웹 애플리케이션
                    프로젝트를 직접 구현하며 프론트엔드에 대한 이해를 넓혀가고
                    있습니다. 또한 프로그래밍의 구조와 프로세스에 대한 이해를
                    넓히기 위해 정보처리기사 자격을 취득하고, 개발 역량의 깊이를
                    지속적으로 확장하고 있습니다. <br />
                    <br /> “ 기본에 충실하되, 성장하기 ” 를 모토로 작은 요소
                    하나라도 놓치지 않는 디테일한 퍼블리싱을 추구하며. 현재에
                    안주하지 않고 다양한 경험과 지속적인 학습을 통해 어디서나
                    유연하게 적응 가능한 인재로 성장해나가고자 합니다.
                  </p>
                  <div className="down-load-files">
                    <ul>
                      <li>
                        <a href="/files/resume.pdf" download="이력서_홍주미">
                          <img
                            src="./img/down_load_icon_b.png"
                            alt="다운로드 아이콘 이미지"
                          />
                          <span>이력서 PDF</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/files/career.pdf"
                          download="경력기술서_홍주미"
                        >
                          <img
                            src="./img/down_load_icon_b.png"
                            alt="다운로드 아이콘 이미지"
                          />
                          <span>경력기술서 PDF</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="about-utils">
                    <ul>
                      <li>
                        <a
                          href="https://www.notion.so/Hong-Jumi-1b843485994b80898131cb3815071f1d"
                          target="_blank"
                          className="small-text"
                        >
                          <img
                            src="/img/notion_icon_b.png"
                            alt="노션 아이콘 이미지"
                          />
                          <span className="scr-only">노션 이력서로 이동</span>
                          resume
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/jumihongsee"
                          target="_blank"
                          className="small-text"
                        >
                          <img
                            src="/img/github_icon_b.png"
                            alt="깃허브 아이콘 이미지"
                          />
                          <span className="scr-only">Github로 이동</span>
                          @jumihongsee
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://velog.io/@hong_zoom/posts"
                          target="_blank"
                          className="small-text"
                        >
                          <img
                            src="/img/velog_icon_b.png"
                            alt="velog 블로그 아이콘 이미지"
                          />
                          <span className="scr-only">velog blog로 이동</span>
                          @hong_zoom
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="career">
                  <div className="section-tag">career</div>
                  <dl className="desc-dl mob-col">
                    <dt>2022.05-2024.11</dt>
                    <dd>스타트아트코리아 웹 퍼블리셔 근무 ( 2년 6개월 )</dd>
                  </dl>
                </section>
                <section id="edu">
                  <div className="section-tag">Education</div>
                  <dl className="desc-dl mob-col">
                    <dt>2021.06-2021.12</dt>
                    <dd>UI/UX 적응형 반응형 웹디자인&웹퍼블리셔</dd>
                    <dt>2016.03-2020.08</dt>
                    <dd>경기대학교 서양화 미술경영학 졸업</dd>
                  </dl>
                </section>
                <section id="certification">
                  <div className="section-tag">certification</div>
                  <dl className="desc-dl">
                    <dt>2025.09</dt>
                    <dd>정보처리기사</dd>
                    <dt>2024.12</dt>
                    <dd>정보처리기능사</dd>
                    <dt>2021.12</dt>
                    <dd>웹디자인기능사</dd>
                    <dt>2021.08</dt>
                    <dd>GTQi 1급(일러스트1급)</dd>
                    <dt>2021.07</dt>
                    <dd>GTQ 1급</dd>
                  </dl>
                </section>
                <section id="skills">
                  <div className="section-tag">skills</div>
                  <dl className="desc-dl mob-col">
                    <dt>MARKUP</dt>
                    <dd>
                      <span>HTML5</span>
                      <span>SCSS</span> <span>JavaScript(ES6+)</span>
                      <span>jQuery</span> <span>GSAP</span>
                    </dd>
                    <dt>FRONTEND</dt>
                    <dd>
                      <span>React</span>
                      <span>Next.js</span>
                    </dd>
                    <dt>DESIGN</dt>
                    <dd>
                      <span>Figma </span>
                      <span>Adobe XD</span>
                      <span>photoshop</span>
                      <span>illustrator</span>
                    </dd>
                  </dl>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section id="works" className="section" ref={worksRef}>
          <div className="inr">
            <div className="cont-wrapper">
              <div className="left-info">
                <div className="section-title-tag small-text">Works</div>
                <h2 className="cont-title">
                  <span className="title-text">제가 만든 ,</span>
                  <span className="title-text"> 작업물들을</span>
                  <span className="title-text"> 소개합니다.</span>
                </h2>
              </div>
              <div className="right-cont">
                <TiltedCard
                  imageSrc="/img/work_01_bg.png"
                  altText="데이지에일 웹사이트 커버 이미지"
                  captionText=""
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.01}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="caption-title small-text">
                        외주작업 | 데이지에일
                      </p>
                      <ul className="caption-link">
                        <li>
                          <a
                            href="https://daisybeer.vercel.app/"
                            target="_blank"
                            className="caption-visit-site"
                          >
                            Visit Web
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />
                <TiltedCard
                  imageSrc="/img/work_02_bg.png"
                  altText="goldstar x blackpink 이벤트용 웹사이트 커버 이미지"
                  captionText=""
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.01}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="caption-title small-text">
                        외주작업 | 3Dフルーツアイス
                      </p>
                      <ul className="caption-link">
                        <li>
                          <a
                            href="https://3dice-blackpink.jp/"
                            target="_blank"
                            className="caption-visit-site"
                          >
                            Visit Web
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />
                <TiltedCard
                  imageSrc="/img/work_03_bg.png"
                  altText="임당유적전시관 클론 웹사이트 커버 이미지"
                  captionText=""
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.01}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="caption-title small-text">
                        개인작업 | 임당유적전시관(클론웹)
                      </p>
                      <ul className="caption-link">
                        <li>
                          <a
                            href="https://imdangmuseum.vercel.app/"
                            target="_blank"
                            className="caption-visit-site"
                          >
                            Visit Web
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.notion.so/Hong-Jumi-1b843485994b80898131cb3815071f1d?p=28643485994b80cd9389f1be57109cc7&pm=c"
                            title="클론코딩 임당유적전시관을 자세히 설명한 노션 페이지로 이동"
                            className="caption-detail-view small-text"
                          >
                            <img
                              src="/img/notion_icon_b.png"
                              alt="노션 아이콘"
                            />
                            Detail View
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />
                <TiltedCard
                  imageSrc="/img/work_04_bg.png"
                  altText="홈쿡 웹사이트 커버 이미지"
                  captionText=""
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.01}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="caption-title small-text">
                        개인작업 | 홈쿡
                      </p>
                      <ul className="caption-link">
                        <li>
                          <a
                            href="https://homecook-virid.vercel.app/"
                            target="_blank"
                            className="caption-visit-site"
                          >
                            Visit Web
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.notion.so/Hong-Jumi-1b843485994b80898131cb3815071f1d?p=28643485994b8022a1cacc658bb80f18&pm=c"
                            title="홈쿡 프로젝트를 자세히 설명한 노션 페이지로 이동"
                            className="caption-detail-view small-text"
                          >
                            <img
                              src="/img/notion_icon_b.png"
                              alt="노션 아이콘"
                            />
                            Detail View
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />
                <TiltedCard
                  imageSrc="/img/work_05_bg.png"
                  altText="홍주미의 포트폴리오 웹사이트 커버 이미지"
                  captionText=""
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.01}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="caption-title small-text">
                        개인작업 | 홍주미 포트폴리오
                      </p>
                      <ul className="caption-link">
                        <li>
                          <a
                            href="https://2026-portfolio-uqjy.vercel.app/"
                            target="_blank"
                            className="caption-visit-site"
                          >
                            Visit Web
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.notion.so/Hong-Jumi-1b843485994b80898131cb3815071f1d?p=28643485994b80aaa3b4fa7c81c3e6b7&pm=c"
                            title="홍주미의 포트폴리오를 자세히 설명한 노션 페이지로 이동"
                            className="caption-detail-view small-text"
                          >
                            <img
                              src="/img/notion_icon_b.png"
                              alt="노션 아이콘"
                            />
                            Detail View
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />

                <TiltedCard
                  imageSrc="/img/work_06_bg.png"
                  altText="기안84 전시 웹사이트 커버 이미지"
                  captionText=""
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.01}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="caption-title small-text">기안84 전시 웹</p>
                      <ul className="caption-link">
                        <li>
                          <a
                            href="https://www.startartkorea.com/kian/"
                            target="_blank"
                            className="caption-visit-site"
                          >
                            Visit Web
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.notion.so/Hong-Jumi-1b843485994b80898131cb3815071f1d?p=28643485994b8088bd31cb32082b654e&pm=c"
                            title="기안84 전시 웹을 자세히 설명한 노션 페이지로 이동"
                            className="caption-detail-view small-text"
                          >
                            <img
                              src="/img/notion_icon_b.png"
                              alt="노션 아이콘"
                            />
                            Detail View
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />
                <TiltedCard
                  imageSrc="/img/work_07_bg.png"
                  altText="트루럭셔리위드아트 웹사이트 커버 이미지"
                  captionText=""
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.01}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="caption-title small-text">
                        트루럭셔리위드아트 호텔전시 웹
                      </p>
                      <ul className="caption-link">
                        <li>
                          <a
                            href="https://www.startartkorea.com/trueluxury/"
                            target="_blank"
                            className="caption-visit-site"
                          >
                            Visit Web
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.notion.so/Hong-Jumi-1b843485994b80898131cb3815071f1d?p=28743485994b801db8fcc7667967f8bf&pm=c"
                            title="트루럭셔리위드아트 호텔전시 웹을 자세히 설명한 노션 페이지로 이동"
                            className="caption-detail-view small-text"
                          >
                            <img
                              src="/img/notion_icon_b.png"
                              alt="노션 아이콘"
                            />
                            Detail View
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />
                <TiltedCard
                  imageSrc="/img/work_08_bg.png"
                  altText="스타트플러스 웹사이트 커버 이미지"
                  captionText=""
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.01}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="caption-title small-text">
                        스타트플러스 전시공간 웹
                      </p>
                      <ul className="caption-link">
                        <li>
                          <a
                            href="https://startartkorea.com/startplus"
                            target="_blank"
                            className="caption-visit-site"
                          >
                            Visit Web
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.notion.so/Hong-Jumi-1b843485994b80898131cb3815071f1d?p=28743485994b806d80a6e8df24dce5b2&pm=c"
                            title="스타트플러스 전시공간 웹을 자세히 설명한 노션 페이지로 이동"
                            className="caption-detail-view small-text"
                          >
                            <img
                              src="/img/notion_icon_b.png"
                              alt="노션 아이콘"
                            />
                            Detail View
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="section" ref={contactRef}>
          <div className="inr">
            <ContactText
              animationDuration={4}
              ease="back.inOut(4)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.1}
              scrub={1}
            >
              Contact me!
            </ContactText>
            <div className="contact-deco-line"></div>
            <div className="contact-txt-wrapper">
              <p className="script-text ">
                함께 이야기를 나누고 싶은
                <strong> 퍼블리셔 홍주미입니다.</strong> <br />
                방문해 주셔서 감사합니다. 혹시 제 작업이 마음에 닿았다면, 언제든
                편하게 연락 주세요.
                <br />
                확인하는 대로 정성껏 답변드리겠습니다!
              </p>
              <a
                className="large-text"
                title="홍주미에게 메일쓰기로 이동"
                href="mailto:juju32@naver.com"
              >
                m : <strong>juju32@naver.com</strong>
              </a>
              <a
                className="large-text"
                title="홍주미의 핸드폰 연락처로 이동"
                href="tel:010-3472-3103"
              >
                t : <strong>010-3472-3103</strong>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
