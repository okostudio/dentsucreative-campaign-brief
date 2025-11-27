import React from 'react'

const Bubble = (props) => {
    return (
        <div className="wobbler">
            <div className='bubble'>
                {props.children}
            </div>
        </div>
    )
}

export default Bubble
