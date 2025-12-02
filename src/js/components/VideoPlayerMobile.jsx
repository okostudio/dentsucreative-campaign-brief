import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


// images
import iphone from "/videos/iPhone16Dark.svg";


const VideoPlayerMobile = (props) => {

    const wrapper = useRef()
    const video = useRef()

    const [isPlaying, setIsPlaying] = useState(false)

    useGSAP(
        () => {
            gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper.current,
                        start: "top center",
                        end: "bottom center",
                        markers: false,
                        onEnter: () => { setIsPlaying(true); },
                        onEnterBack: () => { setIsPlaying(true); },
                        onLeave: () => { setIsPlaying(false); },
                        onLeaveBack: () => { setIsPlaying(false); }
                    }
                })
                tl.from(".video", { opacity: 0, y: "2vw", ease: "power3.out" })

                if (props.children) {
                    const parallax = gsap.timeline({
                        scrollTrigger: {
                            trigger: wrapper.current,
                            start: "top center",
                            end: "bottom center",
                            markers: false,
                            scrub: 0.75
                        }
                    })
                    parallax.fromTo(".overlay", { y: "5vw" }, { y: "-5vw", duration: 2, ease: "linear" }, 0)

                }

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
            <div className="mobile video">
                <img src={iphone} alt="iphone 16" className='phone' />
                <div className="video-scaler">
                    <ReactPlayer
                        ref={video}
                        src={props.videoUrl}
                        playing={isPlaying} // Set to true to enable autoplay
                        loop={true} // Optional: Set to true to loop the video
                        muted={true} // Set to true to mute the video on load for reliable autoplay
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
            {
                props.children ?
                    <div className="overlay">
                        {props.children}
                    </div>
                    : null

            }
        </div>
    )
}

export default VideoPlayerMobile

