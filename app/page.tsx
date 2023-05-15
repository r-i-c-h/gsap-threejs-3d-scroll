"use client";

import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";

import ZeusModel from "@/components/ZeusModel";

import { skewRevealText } from "@/utils/gsap";
import { useLayoutEffect, useRef, useEffect } from "react";
import { useScroll } from "framer-motion";

const Home = () => {
  const { scrollYProgress, scrollY } = useScroll();
  // const textRefH2A = useRef<HTMLHeadingElement | null>(null);
  const textRefH2B = useRef<HTMLHeadingElement | null>(null);
  const textRefH2C = useRef<HTMLHeadingElement | null>(null);
  const textRefH2Z = useRef<HTMLHeadingElement | null>(null);
  const textRefA = useRef<HTMLParagraphElement | null>(null);
  const textRefB = useRef<HTMLParagraphElement | null>(null);
  const textRefC = useRef<HTMLParagraphElement | null>(null);
  const textRefD = useRef<HTMLParagraphElement | null>(null);
  const textRefE = useRef<HTMLParagraphElement | null>(null);
  const textRefF = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    // skewRevealText(textRefH2A);
    skewRevealText(textRefH2B);
    skewRevealText(textRefH2C);
    skewRevealText(textRefH2Z);
    skewRevealText(textRefA);
    skewRevealText(textRefB);
    skewRevealText(textRefC);
    skewRevealText(textRefD);
    skewRevealText(textRefE);
    skewRevealText(textRefF);
  }, []);

  /* scrollYProgress is between 0-1 = a percentage of the page */
  return (
    <main>
      <div className="h-full w-full fixed top-0 left-0 ml-64 bg-hero-gradient bg-right bg-no-repeat bg-cover bg-blend-normal z-0">
        <Canvas>
          {/* <ambientLight intensity={0.03} /> */}
          <ZeusModel
            scale={0.1}
            position={[0, -2, 0]}
            rotation={[0, 5, 0]}
            scrollY={scrollY}
            scrollYProgress={scrollYProgress}

          />
        </Canvas>
      </div>
      <div className="max-w-7xl relative m-auto text-white  z-2">
        <div
          className="h-[100vh] flex items-center"
        // ! CRUFT??
        // /*@ts-expect-error*/
        // initial={`offscreen`}
        // whileInView="onscreen"
        // viewport={{ once: true, amount: 0.2, margin: "800px" }}
        >
          <div className="overflow-hidden">
            <h1 className="text-8xl font-bold font-headline"> Behold Zeus! </h1>
            <h2 className="text-6xl font-bold font-headline">Father of the Gods</h2>
            <p className="text-paragraph max-w-[307px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <p className="text-paragraph max-w-[307px]">
              Corrupti placeat placeat ad occaecati consequuntur at. Minima iusto corrupti rerum id nostrum. Qui velit asperiores adipisci quia sed maxime. Voluptatum minus non laborum quis qui. Laborum sint ut. Quasi autem repellat hic perferendis quos illum et.
            </p>
            <p className="text-paragraph max-w-[307px]">
              Perferendis repellendus eos explicabo sit tempora omnis veritatis. Omnis dolor explicabo exercitationem asperiores deleniti enim rerum ut. Atque amet dignissimos at facere accusantium. Aperiam eum at possimus ducimus nihil.
            </p>
          </div>
        </div>
        <div className="h-[100vh] flex items-center">
          <div className="overflow-hidden">
            <h2
              ref={textRefH2B}
              className="text-5xl font-bold font-headline opacity-0"
            >
              The Side of Zeus
            </h2>
            <p
              className="text-paragraph max-w-[307px] opacity-0"
              ref={textRefA}
            >
              Dolor voluptatum voluptate minima ut sed repudiandae. Quisquam qui cumque at sequi incidunt modi ipsa qui. Dolorum voluptates iure atque natus illo. Sit ut expedita occaecati. Est aspernatur fuga est veritatis. Quo distinctio quod et repellendus excepturi laudantium autem quae est.
            </p>
            <p
              className="text-paragraph max-w-[307px] opacity-0"
              ref={textRefB}
            >
              Voluptatum amet ut dolorem esse quo nostrum aperiam quos. Ad incidunt aut eum quia. Modi dolorum vel in culpa. Illo libero vero id quod voluptatem enim quaerat hic ab. Corporis ut magni ab.
            </p>
            <p
              className="text-paragraph max-w-[307px] opacity-0"
              ref={textRefC}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
          </div>
        </div>
        <div className="h-[100vh] flex items-center">
          <div className="overflow-hidden">
            <h2
              ref={textRefH2C}
              className="text-5xl font-bold font-headline opacity-0"
            >
              Here Comes Zeus! <br /> Zoom-In!
            </h2>
            <p
              className="text-paragraph max-w-[307px] opacity-0"
              ref={textRefD}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <p
              className="text-paragraph max-w-[307px] opacity-0"
              ref={textRefE}
            >
              Lorem Gibson: Courier artisanal warehouse San Francisco papier-mache realism youtube man voodoo god lights cyber-carbon. Footage corrupted savant spook realism tower assault. Euro-pop range-rover engine papier-mache savant BASE jump Legba j-pop rebar post. Motion shanty town sub-orbital grenade bomb pistol RAF.
            </p>
            <p
              className="text-paragraph max-w-[307px] opacity-0"
              ref={textRefF}
            >
              Lorem gibson -Neon weathered realism tattoo corporation man vehicle rain tank-traps skyscraper range-rover face forwards media systemic gang RAF. Tiger-team woman narrative RAF realism rifle disposable human hacker katana. Claymore mine computer vehicle car sentient marketing physical stimulate sensory.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;