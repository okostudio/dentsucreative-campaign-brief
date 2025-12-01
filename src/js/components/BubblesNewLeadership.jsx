import React from 'react'
import Bubble from './Bubble'
import BubblesReveal from './BubblesReveal'

import csr from "/images/people/leadership/csr.png"
import graham from "/images/people/leadership/graham.png"
import halter from "/images/people/leadership/halter.png"
import maddie from "/images/people/leadership/maddie.png"
import sloaney from "/images/people/leadership/sloaney.png"
import stevie from "/images/people/leadership/stevie.png"
import vanessa from "/images/people/leadership/vanessa.png"
import zac from "/images/people/leadership/zac.png"
import useIsMobile from '../hooks/useIsMobile'

const BubblesNewLeadership = () => {
    const isMobile = useIsMobile(768);

    return (
        <BubblesReveal>

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
                    <img src={csr} alt="Cate-Stuart Robertson" />
                    <h5>
                        <strong>Cate-Stuart Robertson</strong><br />
                        Managing Director
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
                    <img src={vanessa} alt="Vanessa Nicol" />
                    <h5>vanessa
                        <strong>Vanessa Nicol</strong><br />
                        Chief Operating Officer
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
                    <img src={stevie} alt="Stevie Dobbs" />
                    <h5>
                        <strong>Stevie Dobbs</strong><br />
                        Group Finance Director
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

            {
                isMobile ?
                    null
                    :
                    <div className="spacer"></div>
            }


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
