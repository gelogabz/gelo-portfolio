import React from 'react'
import Projcards from '../Components/Projcards'
import Skillscards from '../Components/Skillscards'
import puppergram from '../assets/logos/puppergram.jpg'
import unopalooza from '../assets/logos/unopalooza.jpg'
import leavenothing from '../assets/logos/leavenothing.png'
import furlinks from '../assets/logos/furlinks.png'
import gustomoyarn from '../assets/logos/gustomoyarn.png'

function Projects() {
    return (
        <section class="w3-content w3-text-light-grey w3-padding-64 container-fluid">
            <div class="container align-items-center px-4">
                <h2 class="text-light fw-bolder">My Key Skills and Projects</h2>
                <hr class="w3-opacity" />
                <p>These are a collection of my works as well as my technical background. Please feel free to click any of the card buttons below to be redirected to the project you wish to view. <br /><br />This page will always be a work in progress.
                </p>

                <aside class="container-fluid row row-cols-lg-2">
                    <div class="col-lg-8">
                        <h3 class="w3-padding-16 w3-text-light-grey">My Projects</h3>
                        <div>
                            <div class=' border border-3 rounded-3 px-3'>
                                <Projcards
                                    projTitle="Furlinks.Space"
                                    projTools="Laravel, HTML/CSS/JavaScript, Bootstrap, Hostinger" projDesc="Assisted initially as the Project Manager with collecting initial assets as well as the provision of a hosting service and a domain."
                                    projLogo={furlinks}
                                    projLink="http://furlinks.space"
                                />
                                <Projcards
                                    projTitle="LeaveNothing.Org"
                                    projTools="HTML/CSS/JavaScript, Bootstrap"
                                    projDesc="Conceptualized the overall idea of the project and Served as the Project Manager to ensure deadlines and tasks are met prior to production push and used Front-end tech stack (HTML, CSS, Bootstrap,
                                    JavaScript) to build the Services Page."
                                    projLogo={leavenothing}
                                    projLink="https://gelogabz.github.io/WD20P-Mini-Project-2/"
                                />

                                <Projcards
                                    projTitle="UnoPalooza 2022"
                                    projTools="HTML/CSS and Bootstrap"
                                    projDesc="Conceptualized the overall idea of the project and Served as the Project Manager to ensure deadlines and tasks are met prior to production push and used Front-end tech stack (HTML, CSS, Bootstrap) to build the Landing Page and performed code cleanup."
                                    projLogo={unopalooza}
                                    projLink="https://gelogabz.github.io/WD20P-Mini-Project-1-B-UnoPalooza2022/"
                                />

                                <Projcards
                                    projTitle="The PupperGram"
                                    projTools="HTML/CSS and Bootstrap"
                                    projDesc="Built this Photo Gallery/Blogging website and all its pages from scratch as
                                    well as prepared all the assets that were used as content."
                                    projLogo={puppergram}
                                    projLink="https://gelogabz.github.io/WD20P-Mini-Project-1A/"
                                />

                                <Projcards
                                    projTitle="Gusto mo Yarn?"
                                    projTools="React.js, HTML/CSS/JavaScript and Bootstrap"
                                    projDesc="Built this portfolio with blogging and gallery components for a loved one to
                                    showcase their crochet works as well as any other skillset they wanted to add
                                    in"
                                    projLogo={gustomoyarn}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div>
                            <div class='display-5'>
                                <h3 class="w3-padding-16 w3-text-light-grey">Tools & Sites Used</h3>
                                <div class=''>
                                    <i class="fa-brands fa-html5 px-1"></i>
                                    <i class="fa-brands fa-css3 px-1"></i>
                                    <i class="fa-brands fa-js px-1"></i>
                                    <i class="fa-brands fa-bootstrap px-1"></i>
                                    <i class="fa-brands fa-react px-1"></i>
                                    <i class="fa-brands fa-sass px-1"></i>
                                    <i class="fa-brands fa-node-js px-1"></i>
                                    <i class="fa-brands fa-npm px-1"></i>
                                    <i class="fa-brands fa-php px-1"></i>
                                    <i class="fa-solid fa-database px-1"></i>
                                    <i class="fa-brands fa-laravel px-1"></i>
                                    <i class="fa-brands fa-github px-1"></i>
                                    <i class="fa-brands fa-figma px-1"></i>
                                    <i class="fa-brands fa-stack-overflow px-1"></i>
                                    <i class="fa-brands fa-codepen px-1"></i>
                                    <i class="fa-brands fa-free-code-camp px-1"></i>
                                    <i class="fa-brands fa-trello px-1"></i>
                                    <i class="fa-brands fa-jira px-1"></i>
                                    <i class="fa-brands fa-font-awesome px-1"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
                            <Skillscards skillsTitle="Front-end Development" skillsValue="95" />
                            <Skillscards skillsTitle="Back-end Development" skillsValue="93" />
                            <Skillscards skillsTitle="Web Design" skillsValue="92" />
                            <Skillscards skillsTitle="Project Management" skillsValue="88" />
                            <Skillscards skillsTitle="Content Management" skillsValue="87" />
                            <Skillscards skillsTitle="UI/UX Design" skillsValue="80" />
                            <Skillscards skillsTitle="Instructional Design" skillsValue="80" />
                            <Skillscards skillsTitle="Photography & Editing" skillsValue="77" />
                            <Skillscards skillsTitle="Leadership" skillsValue="72" />
                            <Skillscards skillsTitle="Training" skillsValue="71" />
                            <Skillscards skillsTitle="Data Organization" skillsValue="69" />
                            <Skillscards skillsTitle="Data Analysis" skillsValue="66" />
                            <Skillscards skillsTitle="Graphic Design" skillsValue="61" />
                        </div>
                    </div>
                </aside>

            </div>
        </section>
    )
}

export default Projects