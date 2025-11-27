import './App.scss'
import Nav from './js/components/Nav'
import ScrollReveal from './js/components/ScrollReveal'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(useGSAP);

import { ReactLenis } from 'lenis/react'
import VideoPlayer from './js/components/VideoPlayer';
import BubblesWins from './js/components/BubblesWins';
import BubblesAwards from './js/components/BubblesAwards';
import BubblesNewLeadership from './js/components/BubblesNewLeadership';


function App() {
  const lenisRef = useRef()
  const lenisOptions = {
    lerp: 0.5, // Adjust this value for desired smoothness
    duration: 1.2,
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
            Growing Sydney Office <br className='hideMoboile' />
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
          <BubblesNewLeadership />
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
          videoUrl={"https://vimeo.com/1115777560?fl=pl&fe=sh"}
          brand="RMIT"
          job="What the Future?!"
        ></VideoPlayer>

        <VideoPlayer
          videoUrl={"https://vimeo.com/1084821174?fl=pl&fe=sh"}
          brand="Zespri"
          job="Healthier Ways"
        ></VideoPlayer>

        <VideoPlayer
          videoUrl={"https://vimeo.com/1084815116?fl=pl&fe=sh"}
          brand="Iconic"
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
          brand="Amex"
          job="FPO Film 1"
        ></VideoPlayer>
        <VideoPlayer
          videoUrl={"https://vimeo.com/1141061924?fl=pl&fe=sh"}
          brand="Amex"
          job="FPO Film 2"
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
          brand="Amex"
          job="Plan It 1"
        ></VideoPlayer>
        <VideoPlayer
          videoUrl={"https://vimeo.com/1141062019?fl=pl&fe=sh"}
          brand="Amex"
          job="Plan It 2"
        ></VideoPlayer>
        <VideoPlayer
          videoUrl={"https://vimeo.com/1141063914?fl=pl&fe=sh"}
          brand="Amex"
          job="Plan It 3"
        ></VideoPlayer>
        <VideoPlayer
          videoUrl={"https://vimeo.com/1141063854?fl=pl&fe=sh"}
          brand="Amex"
          job="Plan It 4"
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
          brand="ICONIC"
          job="Got you Looking 1"
        ></VideoPlayer>
        <VideoPlayer
          videoUrl={"https://vimeo.com/1141063976?fl=pl&fe=sh"}
          brand="ICONIC"
          job="Got you Looking 2"
        ></VideoPlayer>
        <VideoPlayer
          videoUrl={"https://vimeo.com/1141064070?fl=pl&fe=sh"}
          brand="ICONIC"
          job="Got you Looking 3"
        ></VideoPlayer>

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

        <h2 className="momentum left">
          <ScrollReveal type="basic">
            DentsuWarmingUp.
          </ScrollReveal>
        </h2>

      </div>
    </>
  )
}

export default App