import React, { useRef } from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const StaticImageParallax = (props) => {

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
                    }
                })
                tl.from(".images", { opacity: 0, ease: "power3.out" })

                const parallax = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper.current,
                        start: "top center",
                        end: "bottom center",
                        markers: false,
                        scrub: 0.75
                    }
                })
                const images = Array.from(wrapper.current.querySelectorAll(".images img"));
                images.map((image, i) => {
                    parallax.fromTo(image, { y: (20 * i) }, { y: (5 * -i) + "vw", duration: 2, ease: "linear" }, 0)
                })
            }, wrapper.current);
        }
        , [wrapper]
    )

    return (
        <div className="video-wrapper centered" ref={wrapper}>
            {props.brand && props.job ?
                <h4><img className='brand-logo' src={props.brand} alt={props.job} /><span className="divider-horz"></span>{props.job}</h4>
                : null
            }
            <div className="images">
                {props.children}
            </div>
        </div>
    )
}

export default StaticImageParallax

