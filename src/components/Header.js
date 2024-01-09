import React from 'react'
import Navigationbar from './Navbar'


function Header() {
    return (
        <div class="overlap">
            <div class="overlap-group">
                <div class="overlap-2">
                    <img class="rectangle" src="https://c.animaapp.com/xjKotBIh/img/rectangle-1.svg" />
                    <img class="img" src="https://c.animaapp.com/xjKotBIh/img/rectangle-2.svg" />
                    <img class="logo" src="https://c.animaapp.com/xjKotBIh/img/logo-1@2x.png" />
                    <div class="text-wrapper">RideO</div>
                </div>
                <div class="overlap-3">
                    <img class="rectangle-2" src="https://c.animaapp.com/xjKotBIh/img/rectangle-3.svg" />
                    <img class="rectangle-3" src="https://c.animaapp.com/xjKotBIh/img/rectangle-4.svg" />
                </div>
            </div>
            <div class="navbar">
                <Navigationbar />
            </div>
        </div>
    )
}

export default Header