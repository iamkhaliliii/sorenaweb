"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import X_svg from "@/images/Voc/x.svg";
import facebook_svg from "@/images/Voc/f.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Heading, Subheading } from "@/components/text";

//optional hook for smooth scrolling
import useLenis from "@/hooks/useLenis";

const images = [
  X_svg,
  facebook_svg,
];

const SwipeGrid = () => {
  const grid = useRef<any>(null);
  const gridWrap = useRef<any>(null);

  const hasRun = useRef(false);

  const applyAnimation = () => {
    // Register Scroll Triggren
    gsap.registerPlugin(ScrollTrigger);

    // Child elements of grid
    const gridItems = grid.current?.querySelectorAll(".grid__item");
    const gridItemsInner = [...gridItems].map((item) => item.querySelector(".grid__item-inner"));

    // Define GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: gridWrap.current,
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: true,
        // markers: true // Optional: for debugging
      },
    });

    grid.current.style.perspective = "1000px";
    grid.current.style.width = "calc(1 / 0.65 * 100%)";
    grid.current.style.height = "calc(1 / 0.5 * 100%)";

    timeline
      .set(gridWrap.current, {
        rotationY: 25,
      })
      .set(gridItems, {
        z: () => gsap.utils.random(-1600, 200),
      })
      .fromTo(
        gridItems,
        { xPercent: () => gsap.utils.random(-1000, -500) },
        { xPercent: () => gsap.utils.random(500, 1000) },
        0,
      )
      .fromTo(gridItemsInner, { scale: 2 }, { scale: 0.5 }, 0);
  };

  useLenis();

  useEffect(() => {
    //make sure we run this function only once
    if (!hasRun.current && grid.current) {
      applyAnimation();
      window.scrollTo({ top: 0 });
      hasRun.current = true;
    }
  }, [grid]);

  return (
    <div className="z-10 w-full overflow-hidden mt-100">
              <div className="mx-auto max-w-7xl">
          <Subheading>The Challenge</Subheading>
          <Heading as="h2" className="mt-2 mb-8 max-w-4xl">
          Product, Support, and Marketing teams are overwhelmed by feedback—but still flying blind.
          </Heading></div>
          
      <section className="relative">
        <div
          ref={grid}
          className="grid h-[calc(1/1*100%)] w-[calc(1/1*100%)] place-items-center p-8"
          style={{ perspective: "1500px" }}
        >
          <div
            style={{ transformStyle: "preserve-3d" }}
            ref={gridWrap}
            className="grid h-auto w-full grid-cols-4 gap-[2vw]"
          >
            {Array(5)
              .fill(images)
              .flat()
              .map((src, index) => (
                <div
                  key={index}
                  className="grid__item relative grid aspect-[1] h-full w-full place-items-center overflow-hidden rounded-md ring-1"
                >
                  <Image
                    objectFit="cover"
                    quality={80}
                    src={src}
                    fill={true}
                    className="grid__item-inner relative h-auto"
                    alt="image"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwipeGrid; 