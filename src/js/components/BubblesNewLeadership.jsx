import React from 'react'
import Bubble from './Bubble'
import BubblesReveal from './BubblesReveal'
import csr from '/images/people/headshot-csr.png'
import zac from '/images/people/headshot-zac.png'
import halter from '/images/people/headshot-halter.png'
import graham from '/images/people/headshot-graham.png'
import maddie from '/images/people/headshot-maddie.png'
import sloaney from '/images/people/headshot-sloaney.png'

const BubblesNewLeadership = () => {
    return (
        <BubblesReveal>
            <Bubble>
                <div>
                    <img src={csr} alt="Cate-Stuart Robertson" />
                    <h5>
                        <strong>Cate-Stuart Robertson</strong><br />
                        Managing Director
                    </h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={zac} alt="Zac Pritchard" />
                    <h5>
                        <strong>Zac Pritchard</strong><br />
                        Executive Creative Director
                    </h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={halter} alt="David Halter" />
                    <h5>
                        <strong>David Halter</strong><br />
                        Chief Practice Officer
                    </h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={graham} alt="Graham Alvarez-Jarratt" />
                    <h5>
                        <strong>Graham Alvarez-Jarratt-</strong><br />
                        National Head of Strategy
                    </h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={maddie} alt="Madeleine Page" />
                    <h5>
                        <strong>Madeleine Page</strong><br />
                        Head of Consumer & Brand PR
                    </h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={sloaney} alt="Craig Sloane" />
                    <h5>
                        <strong>Craig Sloane</strong><br />
                        National Head of Production
                    </h5>
                </div>
            </Bubble>



        </BubblesReveal>
    )
}

export default BubblesNewLeadership
