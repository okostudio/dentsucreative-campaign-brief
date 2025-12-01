import React, { useRef } from 'react'
// import { v4 as uuidv4 } from 'uuid';


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "../../plugins/SplitText.js";
import useIsMobile from '../hooks/useIsMobile.js';


gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);


const ScrollReveal = (props) => {
    const scrollWrapper = useRef()
    const isMobile = useIsMobile(768)

    useGSAP(

        () => {
            gsap.context(() => {
                let split = SplitText.create(".split-text", { type: "words,lines,chars", linesClass: "line line++", wordsClass: "word", charsClass: "char", overflow: "hidden" });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: props.trigger ? props.trigger : ".split-text",
                        start: "top center",
                        end: "bottom center",
                        markers: false,
                        scrub: 0.75,
                        normalizeScroll: true
                    }
                })

                switch (props.type) {
                    case "basic":
                        {
                            isMobile ?
                                tl.from(split.chars, { duration: 1, ease: "power3.out", color: "#222", stagger: { amount: 3 } }, "<0")
                                :
                                tl.from(split.chars, { duration: 1, filter: "blur(10px)", ease: "power3.out", color: "#222", stagger: { amount: 3 } }, "<0")
                        }

                        break;
                    case "random":
                        split.lines.map((line, i) => {
                            tl.from(line.querySelectorAll(".char"), { duration: 2.5, ease: "power3.out", color: "#222", rotateX: 120, opacity: 0, stagger: { amount: 3, from: "random", ease: "out" } }, i * 2)
                        })
                        break
                    case "fade":
                        tl.from(split.lines, { duration: 2.5, ease: "power2.out", color: "#222", stagger: { amount: 3, ease: "out" } })
                        break
                    default: break;
                }

            }, scrollWrapper);
        }
        , [scrollWrapper]
    )

    return (

        <div className='scroll-wrapper' ref={scrollWrapper}>
            <div className='split-text'>
                {props.children}
            </div>
        </div>


    )
}

export default ScrollReveal