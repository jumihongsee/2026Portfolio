"use client";

import { useEffect, useState } from "react";
import "./header.scss";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [isActive, setIsActive] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setIsActive(true);
        setIsScroll(false);
      } else {
        if (currentScrollY < lastScrollY) {
          setIsActive(true);
          setIsScroll(true);
        } else {
          setIsActive(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    gsap.to(window, {
      scrollTo: { y: id, offsetY: 0 },
      duration: 0.8,
      ease: "power2.out",
    });
  };

  return (
    <header
      id="main-header"
      className={`${isActive ? "active" : ""} ${isScroll ? "scroll" : ""}`}
    >
      <div className="logo">
        <a
          href="#visual"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#visual");
          }}
        >
          JUMI
        </a>
      </div>
      <ul>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#works");
            }}
          >
            Works
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}
