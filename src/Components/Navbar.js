import React from 'react'
import avatar from "../assets/images/SmartSelect_20220125-184127_Messenger.jpg"
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header class="mx-auto">
            <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <Link to="/">
                    <img src={avatar} className='w-100 mb-5' alt="avatar" />
                </Link>
                <Link to="/About" class="w3-bar-item w3-button w3-padding-large w3-hover-black my-auto">
                    <i class="fa fa-user w3-xxlarge pb-2"></i>
                    <p>ABOUT</p>
                </Link>
                <Link to="/Projects" class="w3-bar-item w3-button w3-padding-large w3-hover-black my-auto">
                    <i class="fa fa-code w3-xxlarge pb-2"></i>
                    <p>PROJECTS</p>
                </Link>
                <Link to="/Gallery" class="w3-bar-item w3-button w3-padding-large w3-hover-black my-auto">
                    <i class="fa fa-camera-retro w3-xxlarge pb-2"></i>
                    <p>GALLERY</p>
                </Link>
                <Link to="/Contact" class="w3-bar-item w3-button w3-padding-large w3-hover-black my-auto">
                    <i class="fa fa-envelope w3-xxlarge pb-2"></i>
                    <p>CONTACT</p>
                </Link>
            </nav>

            <div class="w3-top w3-hide-large w3-hide-medium mx-auto w3-center" id="myNavbar">
                <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-medium">
                    <Link to="/About" class="w3-bar-item w3-button" >ABOUT</Link>
                    <Link to="/Projects" class="w3-bar-item w3-button" >PROJECTS</Link>
                    <Link to="/Gallery" class="w3-bar-item w3-button" >GALLERY</Link>
                    <Link to="/Contact" class="w3-bar-item w3-button" >CONTACT</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar