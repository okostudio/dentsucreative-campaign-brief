
import './App.scss'

import useIsMobile from './js/hooks/useIsMobile';

import Nav from './js/components/Nav'
import ScrollReveal from './js/components/ScrollReveal'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(useGSAP);

import StaticImageParallax from './js/components/StaticImageParallax';

import { ReactLenis } from 'lenis/react'
import VideoPlayer from './js/components/VideoPlayer';
import BubblesWins from './js/components/BubblesWins';
import BubblesAwards from './js/components/BubblesAwards';
import BubblesNewLeadership from './js/components/BubblesNewLeadership';
import BubblesNewPeople from './js/components/BubblesNewPeople';


// images
import diagramExperience from '/images/gfx/Gift-Customer-Experience.gif';
import dentsuJapanese from '/images/gfx/dc-jp.png';

import { LogoDCTagline } from './js/svg/SVGElements';

import logoAmex from '/images/logos/work/logo-amex.png';
import logoChery from '/images/logos/work/logo-chery.png';
import logoIconic from '/images/logos/work/logo-iconic.png';
import logoRMIT from '/images/logos/work/logo-rmit.png';
import logoZespri from '/images/logos/work/logo-zespri.png';
import logoCOD from '/images/logos/work/logo-cod.png';

import codBG from '/images/work/cod-bg.png';
import codText from '/images/work/cod-text.png';







function App() {
  const isMobile = useIsMobile(768);

  const lenisRef = useRef()
  const lenisOptions = {
    lerp: 0.15, // Adjust this value for desired smoothness
    duration: 1.0,
    smoothTouch: true,
    smooth: true,
    autoRaf: false
  };

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <>
      <ReactLenis root ref={lenisRef} options={lenisOptions} />
      <Nav />

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
              5 New Business <br />
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
          videoUrl={"https://vimeo.com/1115777560?fl=pl&fe=sh"}
          brand={logoChery}
          job="Drive further, stop less"
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

        <StaticImageParallax
          brand={logoCOD}
          job="Black Ops 7"
        >
          <img src={codBG} alt="Call Of Duty" />
          <img src={codText} alt="Call Of Duty" />
        </StaticImageParallax>

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
          <h2 className="">
            <ScrollReveal type="fade">
              <strong>DentsWarmingUp.</strong>
            </ScrollReveal>
          </h2>
          <h3 className="">
            <ScrollReveal type="basic">
              {
                isMobile ?
                  <>
                    Which we can <strong>take across the entire customer experience</strong>
                  </>
                  :
                  <>
                    Which we can <strong>take across the</strong> <br />
                    <strong>entire customer experience</strong>
                  </>
              }
            </ScrollReveal>
          </h3>

          <div>
            <img src={diagramExperience} alt="Diagram Experience" className='diagram' />
          </div>

          <div>
            <img src={dentsuJapanese} alt="Diagram Experience" className='dc-jp' />
          </div>

          <div className="cmos">
            <ScrollReveal type="random">
              <h2><strong>300 CMOS</strong></h2>
            </ScrollReveal>
          </div>

          <div className="aim">
            <h2>
              <ScrollReveal type="random">
                But we have one aim: <br />
                <strong>That you feel our passion</strong>
              </ScrollReveal>
            </h2>
          </div>

          <div className="logo-section">
            <LogoDCTagline />
          </div>
        </div>

      </div>
    </>
  )
}

export default App