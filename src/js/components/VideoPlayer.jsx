import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const VideoPlayer = (props) => {

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
            }, wrapper.current);
        }
        , [wrapper]
    )

    return (
        <div className="video-wrapper" ref={wrapper}>
            {props.brand && props.job ?
                <h4><img className='brand-logo' src={props.brand} alt={props.job} /><span className="divider-horz"></span>{props.job}</h4>
                : null
            }
            <div className="video">
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
    )
}

export default VideoPlayer

