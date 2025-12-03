
import './App.scss'

import { ReactLenis } from 'lenis/react'
import HomePageComponent from './js/components/HomePageComponent';
import Nav from './js/components/Nav'

import { Analytics } from "@vercel/analytics/react"

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(useGSAP);




function App() {


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
      <HomePageComponent />
      <Analytics />
    </>
  )
}

export default App