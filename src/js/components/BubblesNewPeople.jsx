
import React from 'react'
import Bubble from './Bubble'
import BubblesReveal from './BubblesReveal'
// import csr from '/images/people/headshot-csr.png'
// import zac from '/images/people/headshot-zac.png'
// import halter from '/images/people/headshot-halter.png'
// import graham from '/images/people/headshot-graham.png'
// import maddie from '/images/people/headshot-maddie.png'
// import sloaney from '/images/people/headshot-sloaney.png'

import AdamCooper from "/images/people/newbies/Adam_Cooper__Junior_Copywriter.png"
import EbonyStantin from "/images/people/newbies/Ebony_Stantin__PR_Senior_Accoutn_Director.png"
import GwenThomas from "/images/people/newbies/Gwen_Thomas__Senior_Copywriter.png"
import HamishFreger from "/images/people/newbies/Hamish_Freger__Public_Relations_Account_Executive.png"
import IrninKhan from "/images/people/newbies/Irnin_Khan__Circle_Headshot.png"
import JakeHealy from "/images/people/newbies/Jake_Healy__Creative_Resource_Manager.png"
import JanineAllen from "/images/people/newbies/Janine_Allen__Senior_Account_Director.png"
import JessicaSzakacs from "/images/people/newbies/Jessica_Szakacs__Junior_Art_Director.png"
import KellyHenderson from "/images/people/newbies/Kelly_Henderson__Senior_Account_Director.png"
import LachlanCollie from "/images/people/newbies/Lachlan_Collie__Copywriter.png"
import LiamJensen from "/images/people/newbies/Liam_Jensen__PR_Account_Executive.png"
import LouisMoore from "/images/people/newbies/Louis_Moore__Integrated_Producer.png"
import ManuellaPerche from "/images/people/newbies/Manuella_Perche__Group_Account_Director.png"
import MaxwellHackett from "/images/people/newbies/Maxwell_Hackett__Senior_Account_Manager.png"
import OliverDrummond from "/images/people/newbies/Oliver_Drummond__CX_Strategist.png"
import RowanMarshCroft from "/images/people/newbies/Rowan_Marsh_Croft__Art_Directorv.png"
import StephaniePeric from "/images/people/newbies/Stephanie_Peric__PR_Account_Manager.png"
import YolandaRodriguez from "/images/people/newbies/Yolanda_Rodriguez__Senior_Business_Manager.png"

import ParisElwood from "/images/people/newbies/Paris_Elwood__Designer.png"
import ConniePlatania from "/images/people/newbies/Connie_Platania_Senior_Account_Manager.png"
import useIsMobile from '../hooks/useIsMobile'


const BubblesNewPeople = () => {
    const isMobile = useIsMobile(768)

    return (
        <BubblesReveal>

            <Bubble>
                <div>
                    <img src={AdamCooper} alt="New Person" />
                    <h5>
                        <strong>Adam Cooper</strong><br />
                        Junior Copywriter
                    </h5>
                </div>
            </Bubble >
            <Bubble>
                <div>
                    <img src={ConniePlatania} alt="New Person" />
                    <h5>
                        <strong>Connie Platania </strong><br />
                        Senior Account Manager
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={EbonyStantin} alt="New Person" />
                    <h5>
                        <strong>Ebony Stantin </strong><br />
                        PR Senior Account Director
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={GwenThomas} alt="New Person" />
                    <h5>
                        <strong>Gwen Thomas </strong><br />
                        Senior Copywriter
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={HamishFreger} alt="New Person" />
                    <h5>
                        <strong>Hamish Freger </strong><br />
                        Public Relations Account Executive
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={IrninKhan} alt="New Person" />
                    <h5>
                        <strong>Irnin Khan </strong><br />
                        Senior Strategy Director
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={JakeHealy} alt="New Person" />
                    <h5>
                        <strong>Jake Healy </strong><br />
                        Creative Resource Manager
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={JanineAllen} alt="New Person" />
                    <h5>
                        <strong>Janine Allen</strong><br />
                        Senior Account Director
                    </h5>
                </div>
            </Bubble>

            <Bubble>
                <div>
                    <img src={JessicaSzakacs} alt="New Person" />
                    <h5>
                        <strong>Jessica Szakacs </strong><br />
                        Junior Art Director
                    </h5>
                </div>
            </Bubble >
            <Bubble>
                <div>
                    <img src={KellyHenderson} alt="New Person" />
                    <h5>
                        <strong>Kelly Henderson  </strong><br />
                        Senior Account Director
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={LachlanCollie} alt="New Person" />
                    <h5>
                        <strong>Lachlan Collie </strong><br />
                        Copywriter
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={LiamJensen} alt="New Person" />
                    <h5>
                        <strong>Liam Jensen </strong><br />
                        PR Account Executive
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={LouisMoore} alt="New Person" />
                    <h5>
                        <strong>Louis Moore </strong><br />
                        Integrated Producer
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={ManuellaPerche} alt="New Person" />
                    <h5>
                        <strong>Manuella Perche </strong><br />
                        Group Account Director
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={MaxwellHackett} alt="New Person" />
                    <h5>
                        <strong>Maxwell Hackett </strong><br />
                        Senior Account Manager
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={OliverDrummond} alt="New Person" />
                    <h5>
                        <strong>Oliver Drummond </strong><br />
                        CX Strategist
                    </h5>
                </div>
            </Bubble >
            <Bubble>
                <div>
                    <img src={ParisElwood} alt="New Person" />
                    <h5>
                        <strong>Paris Elwood </strong><br />
                        Designer
                    </h5>
                </div>
            </Bubble >
            <Bubble>
                <div>
                    <img src={RowanMarshCroft} alt="New Person" />
                    <h5>
                        <strong>Rowan Marsh Croft </strong><br />
                        Art Director
                    </h5>
                </div>
            </Bubble>
            <Bubble>
                <div>
                    <img src={StephaniePeric} alt="New Person" />
                    <h5>
                        <strong>Stephanie Peric </strong><br />
                        PR Account Manager
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
                    <img src={YolandaRodriguez} alt="New Person" />
                    <h5>
                        <strong>Yolanda Rodriguez </strong><br />
                        Senior Business Manager
                    </h5>
                </div>
            </Bubble>

        </BubblesReveal >
    )
}

export default BubblesNewPeople
