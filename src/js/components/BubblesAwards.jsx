import React from 'react'
import Bubble from './Bubble'
import { Award1 } from '../svg/SVGElements'
import BubblesReveal from './BubblesReveal'

const BubblesAwards = () => {
    return (
        <BubblesReveal>
            <Bubble>
                <div>
                    <Award1 />
                    <h5>1x Clios</h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <Award1 />
                    <h5>4x Award</h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <Award1 />
                    <h5>1x Effie</h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <Award1 />
                    <h5>1x OMA</h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <Award1 />
                    <h5>2x Cairns Crocs</h5>
                </div>
            </Bubble>
        </BubblesReveal>
    )
}

export default BubblesAwards
