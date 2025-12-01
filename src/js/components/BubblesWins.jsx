import React from 'react'
import Bubble from './Bubble'
// import { LogoA2, LogoBrand1, LogoBrand2, LogoChery, LogoPrime } from '../svg/SVGElements'
import BubblesReveal from './BubblesReveal'

import logosWinsA2 from '/images/logos/wins/a2milk.png';
import logosWinsOchre from '/images/logos/wins/ochre.png';
import logosWinsChery from '/images/logos/wins/chery.png';
import logosWinsFederal from '/images/logos/wins/federal.png';
import logosWinsID from '/images/logos/wins/id.png';
import logosWinsLepas from '/images/logos/wins/lepas.png';
import logosWinsNFL from '/images/logos/wins/nfl.png';
import logosWinsPrime from '/images/logos/wins/prime.png';
import logosWinsTourismQld from '/images/logos/wins/tourism-qld.png';

const BubblesWins = () => {
    return (

        <BubblesReveal>
            <Bubble>
                <img src={logosWinsA2} className='wins' />
            </Bubble>
            <Bubble>
                <img src={logosWinsOchre} className='wins' />
            </Bubble>
            <Bubble>
                <img src={logosWinsChery} className='wins' />
            </Bubble>
            <Bubble>
                <img src={logosWinsFederal} className='wins' />
            </Bubble>
            <Bubble>
                <img src={logosWinsID} className='wins' />
            </Bubble>
            <Bubble>
                <img src={logosWinsLepas} className='wins' />
            </Bubble>
            <Bubble>
                <img src={logosWinsNFL} className='wins' />
            </Bubble>
            <Bubble>
                <img src={logosWinsPrime} className='wins' />
            </Bubble>
            <Bubble>
                <img src={logosWinsTourismQld} className='wins' />
            </Bubble>
        </BubblesReveal>

    )
}

export default BubblesWins
