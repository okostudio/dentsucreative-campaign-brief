import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "../../plugins/SplitText.js";


gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);


const ScrollReveal = (props) => {
    const scrollWrapper = useRef()

    useGSAP(

        () => {
            gsap.context(() => {
                let split = SplitText.create(".split-text", { type: "words,lines,chars", linesClass: "line line++", wordsClass: "word", charsClass: "char", overflow: "hidden" });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".split-text",
                        start: "top +=60%",
                        end: "bottom +=80%",
                        markers: true,
                        scrub: 1,
                        normalizeScroll: true

                    }
                })

                switch (props.type) {
                    case "basic":
                        tl.from(split.lines, { duration: 1.5, opacity: 0.3, ease: "power3.inOut", stagger: { amount: 2 } })
                        tl.from(split.chars, { duration: 0.02, ease: "power3.out", color: "#222", stagger: { amount: 3 } }, "<1")
                        break;
                    case "random":
                        tl.from(split.chars, { duration: 3, ease: "power3.out", color: "#222", rotateX: 90, opacity: 0, stagger: { amount: 3, from: "random", ease: "out" } })
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




// {
//                     [...Array(props.repeat)].map(() => (
//                         <div key={uuidv4()}>
//                             {props.children}
//                         </div>
//                     ))
//                 }