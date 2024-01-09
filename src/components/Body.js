import React from 'react'

function Body(props) {
    return (
        <div class="e-rido">
            <div class="div">
                {props.children}
            </div>
        </div>
    )
}

export default Body