import { useRef } from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "../plugins/DrawSVGPlugin.js";
gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);


// import React from "react";
const Preloader = (props) => {

    // black background
    const { isBlack } = props;

    const loaderRef = useRef();
    useGSAP(
        () => {
            gsap.context(() => {
                const tl = gsap.timeline({
                    // scrollTrigger: {
                    //     trigger: scrollAnimation.current,
                    //     start: 'top center',
                    //     end: 'bottom center',
                    //     scrub: false,
                    // }
                })


                tl.addLabel("start")
                    .from(".oko-mask rect.white", {
                        scaleY: 0,
                        skewY: -45,
                        duration: 0.8,
                        stagger: 0.05,
                        ease: "power4.inOut"
                    }, "+=0")
                    .from(".oko-mask rect.green", {
                        scaleY: 0,
                        skewY: -45,
                        duration: 0.8,
                        stagger: 0.05,
                        ease: "power4.inOut"
                    }, "-=0.9")
                    .from(".oko-mask rect.black", {
                        scaleY: 0,
                        skewY: -45,
                        duration: 0.8,
                        stagger: 0.05,
                        ease: "power4.inOut"
                    }, "-=0.9")
                    .to(loaderRef.current, {
                        duration: 0.99,
                        y: "-100%",
                        display: "none",
                        ease: "power4.inOut"
                    }, "-=0.5")
                    .to(".rounded-end", {
                        duration: 0.99,
                        scaleY: 0,
                        ease: "power4.inOut"
                    }, "-=0.99")
                    .to(".section__loader .flex", {
                        duration: 0.99,
                        y: "35vh",
                        ease: "power4.inOut"
                    }, "-=0.99")
                    .addLabel("end")
            }, loaderRef)
        }
        , [loaderRef]
    )

    return (
        <section className={`section__loader ${isBlack ? "black" : ""}`} ref={loaderRef}>
            <div className="flex centred" >
                <OKOLoaderIcon />
            </div>
            <div className="rounded-end negative">
                <RoundEndNegative />
            </div>

        </section>
    );
};

export default Preloader;
