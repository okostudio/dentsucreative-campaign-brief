import React from 'react'
import Bubble from './Bubble'
import { LogoA2, LogoBrand1, LogoBrand2, LogoChery, LogoPrime } from '../svg/SVGElements'
import BubblesReveal from './BubblesReveal'

const BubblesWins = () => {
    return (

        <BubblesReveal>
            <Bubble>
                <LogoChery />
            </Bubble>
            <Bubble>
                <LogoPrime />
            </Bubble>
            <Bubble>
                <LogoA2 />
            </Bubble>
            <Bubble>
                <LogoBrand1 />
            </Bubble>
            <Bubble>
                <LogoBrand2 />
            </Bubble>
        </BubblesReveal>

    )
}

export default BubblesWins
