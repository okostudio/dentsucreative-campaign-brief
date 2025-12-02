
import '../../App.scss'

import useIsMobile from '../hooks/useIsMobile';

import ScrollReveal from './ScrollReveal'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// import { useEffect, useRef } from 'react';
gsap.registerPlugin(useGSAP);

import StaticImageParallax from './StaticImageParallax';

import VideoPlayer from './VideoPlayer';
import VideoPlayerMobile from './VideoPlayerMobile';
import BubblesWins from './BubblesWins';
import BubblesAwards from './BubblesAwards';
import BubblesNewLeadership from './BubblesNewLeadership';
import BubblesNewPeople from './BubblesNewPeople';


// images
import { LogoDCTagline } from '../svg/SVGElements';

// import diagramExperience from '/images/gfx/Gift-Customer-Experience.gif';
// import dentsuJapanese from '/images/gfx/dc-jp.png';

import logoAmex from '/images/logos/work/logo-amex.png';
import logoChery from '/images/logos/work/logo-chery.png';
import logoIconic from '/images/logos/work/logo-iconic.png';
import logoRMIT from '/images/logos/work/logo-rmit.png';
import logoZespri from '/images/logos/work/logo-zespri.png';
import logoCOD from '/images/logos/work/logo-cod.png';

// import codBG from '/images/work/cod-bg.png';
import codText from '/images/work/cod-text.png';

function HomePageComponent() {
    const isMobile = useIsMobile(768);

    return (
        <>
            <div className="main">

                <h3 className="dents-who">
                    DentsWho? <br />
                    <ScrollReveal type="basic">
                        DentsWho? <br />
                        DentsWho? <br />
                        DentsWho? <br />
                        DentsWho? <br />
                        DentsWho? <br />
                        DentsWho? <br />
                        DentsWho? <br />
                        DentsWho?
                    </ScrollReveal>
                </h3>

                <h3 className="dents-warming-up">
                    <ScrollReveal type="basic">
                        DentsWarmingUp <br />
                        DentsWarmingUp <br />
                        DentsWarmingUp <br />
                        DentsWarmingUp <br />
                        DentsWarmingUp <br />
                        DentsWarmingUp
                    </ScrollReveal>
                </h3>

                <h2 className="intro">
                    <ScrollReveal repeat={1} type="random">
                        Local & International Awards <br className='hideMoboile' />
                        New Leadership Team <br className='hideMoboile' />
                        New Business Wins <br className='hideMoboile' />
                        New People
                    </ScrollReveal>
                </h2>

                <h3 className="momentum left r40">
                    <ScrollReveal type="basic">
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        Momentum
                    </ScrollReveal>
                </h3>

                <h3 className="new-business right r40">
                    <ScrollReveal type="basic">
                        New Business <br />
                        New Business <br />
                        New Business <br />
                        New Business <br />
                        New Business <br />
                        New Business
                    </ScrollReveal>
                </h3>

                <div className="wins">
                    <h2>
                        <ScrollReveal repeat={1} type="random">
                            9 New Business <br />
                            Wins in 2025
                        </ScrollReveal>
                    </h2>
                    <BubblesWins />
                </div>

                <h3 className="momentum left">
                    <ScrollReveal type="basic">
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        Momentum
                    </ScrollReveal>
                </h3>

                <h3 className="awards right">
                    <ScrollReveal type="basic">
                        Award wins <br />
                        Award wins <br />
                        Award wins <br />
                        Award wins <br />
                        Award wins <br />
                        Award wins
                    </ScrollReveal>
                </h3>

                <div className="awards">
                    <h2>
                        <ScrollReveal repeat={1} type="random">
                            Even Bronze gets <br />
                            on the podium
                        </ScrollReveal>
                    </h2>
                    <BubblesAwards />
                </div>

                <div className="new-faces people">
                    <h3 className="xl">
                        <ScrollReveal type="basic">
                            New Faces <br />
                            New Faces <br />
                            New Faces <br />
                            New Faces <br />
                            New Faces <br />
                            New Faces
                        </ScrollReveal>
                    </h3>
                    <BubblesNewPeople />
                </div>


                <div className="new-leadership people">
                    <h3>
                        <ScrollReveal type="basic">
                            New Leadership <br />
                            New Leadership <br />
                            New Leadership <br />
                            New Leadership <br />
                            New Leadership <br />
                            New Leadership
                        </ScrollReveal>
                    </h3>
                    <BubblesNewLeadership />
                </div>

                <div className="creative-work">
                    <h3 className="xl">
                        <ScrollReveal type="basic">
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work
                        </ScrollReveal>
                    </h3>
                </div>


                <VideoPlayer
                    videoUrl={"https://vimeo.com/1084827843?fl=pl&fe=sh"}
                    brand={logoRMIT}
                    job="What the Future?!"
                ></VideoPlayer>


                {isMobile ?
                    <VideoPlayer
                        videoUrl={"https://vimeo.com/1084821174?fl=pl&fe=sh"}
                        brand={logoZespri}
                        job="Healthier Ways"
                    ></VideoPlayer>
                    :
                    <div className="grid-col2">
                        <h3 className="momentum left r40">
                            <ScrollReveal type="basic">
                                Momentum <br />
                                Momentum <br />
                                Momentum <br />
                                Momentum <br />
                                Momentum
                            </ScrollReveal>
                        </h3>
                        <VideoPlayer
                            videoUrl={"https://vimeo.com/1084821174?fl=pl&fe=sh"}
                            brand={logoZespri}
                            job="Healthier Ways"
                        ></VideoPlayer>
                    </div>
                }


                {/* ICONIC GYL */}
                <VideoPlayer
                    videoUrl={"https://vimeo.com/1141064026?fl=pl&fe=sh"}
                    brand={logoIconic}
                    job="Got you Looking"
                ></VideoPlayer>
                {isMobile ?
                    <VideoPlayer
                        videoUrl={"https://vimeo.com/1141063976?fl=pl&fe=sh"}
                    // brand={logoIconic}
                    // job="Got you Looking"
                    ></VideoPlayer>
                    :
                    <div className="grid-col2">

                        <h3 className="momentum">
                            <ScrollReveal type="basic">
                                Got you Looking <br />
                                Got you Looking <br />
                                Got you Looking <br />
                                Got you Looking <br />
                                Got you Looking
                            </ScrollReveal>
                        </h3>
                        <VideoPlayer
                            videoUrl={"https://vimeo.com/1141063976?fl=pl&fe=sh"}
                        // brand={logoIconic}
                        // job="Got you Looking"
                        ></VideoPlayer>
                    </div>
                }
                <VideoPlayer
                    videoUrl={"https://vimeo.com/1141064070?fl=pl&fe=sh"}
                // brand={logoIconic}
                // job="Got you Looking"
                ></VideoPlayer>


                <div className="creative-work">
                    <h3 className="xl">
                        <ScrollReveal type="basic">
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work
                        </ScrollReveal>
                    </h3>
                </div>

                <VideoPlayer
                    videoUrl={"https://vimeo.com/1141062891?fl=pl&fe=sh"}
                    brand={logoAmex}
                    job="Plan It"
                ></VideoPlayer>
                {isMobile ?
                    <VideoPlayer
                        videoUrl={"https://vimeo.com/1141062019?fl=pl&fe=sh"}
                    // brand={logoAmex}
                    // job="Plan It"
                    ></VideoPlayer>
                    :
                    <div className="grid-col2">
                        <h3 className="momentum">
                            <ScrollReveal type="basic">
                                Momentum <br />
                                Momentum <br />
                                Momentum <br />
                                Momentum <br />
                                Momentum
                            </ScrollReveal>
                        </h3>
                        <VideoPlayer
                            videoUrl={"https://vimeo.com/1141062019?fl=pl&fe=sh"}
                        // brand={logoAmex}
                        // job="Plan It"
                        ></VideoPlayer>
                    </div>
                }
                <VideoPlayer
                    videoUrl={"https://vimeo.com/1141063914?fl=pl&fe=sh"}
                // brand={logoAmex}
                // job="Plan It"
                ></VideoPlayer>
                {isMobile ?
                    <VideoPlayer
                        videoUrl={"https://vimeo.com/1141063854?fl=pl&fe=sh"}
                    // brand={logoAmex}
                    // job="Plan It"
                    ></VideoPlayer>
                    :
                    <div className="grid-col2">
                        <VideoPlayer
                            videoUrl={"https://vimeo.com/1141063854?fl=pl&fe=sh"}
                        // brand={logoAmex}
                        // job="Plan It"
                        ></VideoPlayer>
                        <h3 className="momentum left r40">
                            <ScrollReveal type="basic">
                                Momentum <br />
                                Momentum <br />
                                Momentum <br />
                                Momentum <br />
                                Momentum
                            </ScrollReveal>
                        </h3>
                    </div>
                }

                <VideoPlayer
                    videoUrl={"https://vimeo.com/1084815116?fl=pl&fe=sh"}
                    brand={logoIconic}
                    job="Banner Ad Changeroom"
                ></VideoPlayer>

                <div className="creative-work">
                    <h3 className="xl">
                        <ScrollReveal type="basic">
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work <br />
                            Creative Work
                        </ScrollReveal>
                    </h3>
                </div>

                <VideoPlayer
                    videoUrl={"https://vimeo.com/1115777560?fl=pl&fe=sh"}
                    brand={logoChery}
                    job="Drive further, stop less"
                ></VideoPlayer>


                {/* AMEX MOBILE VIDEO THING ============= */}
                <VideoPlayerMobile
                    videoUrl="/videos/DEN086_Amex_Membership_081025_Lets_Go_Back_9x16_60fps.mp4"
                    posterUrl="/videos/DEN086_Amex_Membership_081025_Lets_Go_Back_9x16_60fps.jpg"
                    brand={logoAmex}
                    job="Let's go back"
                >

                </VideoPlayerMobile>

                {/* AMEX FPO ============= */}
                <VideoPlayer
                    videoUrl={"https://vimeo.com/1141061873?fl=pl&fe=sh"}
                    brand={logoAmex}
                    job="FPO Film"
                ></VideoPlayer>
                {isMobile ?
                    <VideoPlayer
                        videoUrl={"https://vimeo.com/1141061924?fl=pl&fe=sh"}
                    // brand={logoAmex}
                    // job="FPO Film"
                    ></VideoPlayer>
                    :
                    <div className="grid-col2">
                        <VideoPlayer
                            videoUrl={"https://vimeo.com/1141061924?fl=pl&fe=sh"}
                        // brand={logoAmex}
                        // job="FPO Film"
                        ></VideoPlayer>
                        <h3 className="momentum left r40">
                            <ScrollReveal type="basic">
                                Momentum <br />
                                Momentum <br />
                                Momentum <br />
                                Momentum <br />
                                Momentum
                            </ScrollReveal>
                        </h3>
                    </div>
                }


                <VideoPlayerMobile
                    videoUrl="/videos/CoD_BlackOps7_LaunchVideo_Alt_2_V006_compressed_1.mp4"
                    posterUrl="/videos/CoD_BlackOps7_LaunchVideo_Alt_2_V006_compressed_1.jpg"
                    brand={logoCOD}
                    job="Black Ops 7"
                >
                    <img src={codText} alt="Call Of Duty" />
                </VideoPlayerMobile>

                <h3 className="momentum left">
                    <ScrollReveal type="basic">
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        Momentum <br />
                        So yeah.
                    </ScrollReveal>
                </h3>

                <div className="warming-up">


                    <div className="logo-section">
                        <div>
                            <h2 className="XXL">
                                <ScrollReveal type="fade">
                                    {

                                        isMobile ?
                                            <strong>Dents<br />Warming<br />Up.</strong>
                                            :
                                            <strong>DentsWarmingUp.</strong>
                                    }
                                </ScrollReveal>
                            </h2>
                            {/* <LogoDCTagline /> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePageComponent
