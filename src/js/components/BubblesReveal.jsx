import React, { useRef } from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const BubblesReveal = (props) => {
    const wrapper = useRef()

    useGSAP(
        () => {
            gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper.current,
                        start: "top center",
                        end: "bottom center",
                        markers: false,
                        scrub: 0.5,
                        normalizeScroll: true
                    }
                })
                tl.from(".wobbler", { duration: 1, ease: "power3.out", y: "15vw", opacity: 0, stagger: { amount: 1, from: "linear", ease: "out" } })
            }, wrapper.current);
        }
        , [wrapper]
    )

    return (
        <div className='bubbles' ref={wrapper}>
            {props.children}
        </div>
    )
}

export default BubblesReveal


