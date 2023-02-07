import React from 'react';
import '../App.css';
import mainImage from "../assets/images/Gelopic2.jpg";

function Home() {
    return (
        <header class="App w3-container w3-padding-32 w3-center w3-black mx-auto" id="home">
            <h1 class="w3-jumbo main-header"><span class="w3-hide-small">I'm</span> Gelo Baring.</h1>
            <p class="subheader">Digital Content Specialist. Full-stack Web Developer. UI/UX Designer. Photographer. Hiker.</p>
            <img src={mainImage} alt="GeloBaring" class="w3-image rounded-circle shadow img-thumbnail opacity-75 mt-4" width="500" height="500" />
        </header>
    )
}

export default Home