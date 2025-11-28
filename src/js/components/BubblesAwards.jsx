import React from 'react'
import Bubble from './Bubble'
import awardawards from "/images/awards/awardawards.png"
import cairnscrocs from "/images/awards/cairnscrocs.png"
import clios from "/images/awards/clios.png"
import effie from "/images/awards/effie.png"
import OMA from "/images/awards/OMA.png"

import BubblesReveal from './BubblesReveal'

const BubblesAwards = () => {
    return (
        <BubblesReveal>
            <Bubble>
                <div>
                    <img src={clios} alt="clios" />
                    <h5>1x Award</h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={awardawards} alt="awardawards" />
                    <h5>4x Awards</h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={effie} alt="effie" />
                    <h5>1x Award</h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={OMA} alt="OMA" />
                    <h5>1x Award</h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={cairnscrocs} alt="cairnscrocs" />
                    <h5>2x Awards</h5>
                </div>
            </Bubble>
        </BubblesReveal>
    )
}

export default BubblesAwards
