import React from 'react'
import { LogoDC, LockupCreatedByDC } from '../svg/SVGElements'

function Nav() {
    return (
        <nav>
            {/* <div className="container"> */}
            <LogoDC />
            <LockupCreatedByDC />
            {/* <h5>Created by <strong>Dentsu Creative</strong></h5> */}
            {/* </div> */}
        </nav>
    )
}

export default Nav
