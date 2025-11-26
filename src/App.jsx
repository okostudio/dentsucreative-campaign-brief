import './App.scss'
import Nav from './js/components/Nav'
import ScrollReveal from './js/components/ScrollReveal'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(useGSAP);

import { ReactLenis } from 'lenis/react'


function App() {
  const lenisRef = useRef()
  const lenisOptions = {
    lerp: 0.1, // Adjust this value for desired smoothness
    duration: 1.2,
    smoothTouch: true,
    smooth: true,
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
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} options={lenisOptions} />
      <Nav />



      <div className="main">
        <h3 className="dents-who">
          DentsWho? <br />
          <ScrollReveal repeat={8} type="basic">
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
          <ScrollReveal repeat={8} type="basic">
            DentsWarmingUp <br />
            DentsWarmingUp <br />
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
        <h3 className="momentum">
          <ScrollReveal repeat={8} type="basic">
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum
          </ScrollReveal>
        </h3>
        <h3 className="new-business">
          <ScrollReveal repeat={8} type="basic">
            New Business <br />
            New Business <br />
            New Business <br />
            New Business <br />
            New Business <br />
            New Business <br />
            New Business <br />
            New Business
          </ScrollReveal>
        </h3>
        <h2 className="wins">
          <ScrollReveal repeat={1} type="random">
            5 New Business <br />
            Wins in 2025
          </ScrollReveal>
        </h2>
        <h3 className="momentum left">
          <ScrollReveal repeat={8} type="basic">
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum <br />
            Momentum

          </ScrollReveal>
        </h3>
      </div>
    </>
  )
}

export default App
