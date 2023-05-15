import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MutableRefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const skewRevealText = (textRef: MutableRefObject<HTMLHeadingElement | null>) => {
  ScrollTrigger.create({
    trigger: textRef.current,
    start: "top bottom-=100px",
    // end: "center center",
    // end: "+=200",
    end: "bottom 10%",
    // end: "bottom 25%+=100px",
    markers: false,
    once: true,
    onEnter: (targetRef) => {
      console.log({ targetRef });

      gsap.fromTo(
        textRef.current,
        {
          y: 200,
          skewY: 20,
          opacity: 0,
        },
        {
          duration: 0.6,
          y: 0,
          skewY: 0,
          opacity: 1,
        }
      );
    },
  });
};

/* ALT? */
//?? ALTERNATE APPROACH...
/*
  const tl = gsap.timeline();
  tl.from(".some-class p", {
    duration: 1.8,
    delay: 1,
    y: 200,
    skewY: 10,
    stagger: {
      amount: 0.5
    }
  });
*/
