import React from 'react'
import gelopic from '../assets/images/Gelopic1.jpg'
import Employmenttable from '../Components/Employmenttable'

function About() {
    return (
        <section class="w3-content w3-justify w3-text-light-grey w3-padding-64 container-fluid">
            <article class='row my-3'>
                <h2 class="text-light fw-bolder">I am Angelo Gabriel Baring</h2>
                <hr class="w3-opacity" />
                <div class="col-4 container px-4">
                    <img src={gelopic} class='img-thumbnail' alt="gelo" />
                </div>
                <div class="col-8 container-fluid px-4 align-items-center">
                    <p class='fst-light w3-medium'>I am a Full-stack Web Developer, future UX Designer, and self-taught Digital Content
                        Specialist seeking a position in <strong>Web Development</strong>, <strong>Web Design</strong>, <strong>Content Management</strong>,
                        <strong> Project Management</strong>, React-related, and Laravel-related Programs with robust
                        problem-solving skills and proven experience in organized content and planning UI/UX
                        improvements in a test-driven environment.

                        <br /> <br /> Right now, I am currently in the process of getting my UX Design Certification!

                        <br /><br />No matter which industry or company I am in, I have been given feedback that my strengths include high
                        intelligence, both in an intellectual and emotional state, a quick and keen learner, very tech-savvy,
                        infamously curious, amazing in communication, and highly creative.

                        <br /><br />Outside the office, however, I am an avid adventurer anywhere from sea to summit, I am a musician, a
                        bookworm, and a gamer.
                    </p>
                </div>
            </article>
            <div class="container-fluid align-items-center px-4 mx-auto">
                <h3 class="w3-padding-16 w3-text-light-grey">My Employment History</h3>
                <div class='container-fluid'>
                    <table class="table table-sm table-borderless text-light bg-transparent text-center align-top ">
                        <thead class='align-middle text-bg-success'>
                            <tr class='p-3'>
                                <th>Dates</th>
                                <th>Company</th>
                                <th>Role</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <Employmenttable
                            employmentDate="Mar 2023 - Aug 2023"
                            lastEmployer="Voltec Solutions OPC "
                            jobRole="Web Developer"
                            jobSummary="Developed and maintained websites and web applications for Japanese clients using front-end tech stacks." />
                        <Employmenttable
                            employmentDate="Dec 2017 - Jan 2023"
                            lastEmployer="Grab PH"
                            jobRole="Digital Content Specialist"
                            jobSummary="Created and Edited Knowledge Base Articles for Grab Support's (GS) process documentation, Maintains the data streams of the KB Articles to assess GS behavior, Introduced features implemented in a Region-wide setting, Developed and implemented features for solutions based on team requirements" />
                        <Employmenttable
                            employmentDate="Mar - Oct 2016"
                            lastEmployer="Open Access Marketing"
                            jobRole="Customer Service Representative"
                            jobSummary="Email support to a U.S. based ridesharing company, Assigned to a special project in the campaign involving B2B support and Applications, Chat Support" />
                        <Employmenttable
                            employmentDate="Jan 2015 - Jan 2016"
                            lastEmployer="Lazada PH"
                            jobRole="Customer Service Representative"
                            jobSummary="Inhouse Email and Phone Support (Level 2), Subject Matter Expert, Team POC assumes the responsibilities of the Team Leader and the Workforce Management, Trained to collate both agent and supervisor level data such as ticket statistics and SLA Breach reports, Trained in Warehouse Order Management Systems which includes collecting statistical data from all concerned departments such as the Logistics Teams and the Payments Teams" />

                    </table>
                </div>
            </div>
        </section>
    )
}

export default About