import React from 'react'

function Contact() {
    return (
        <section class="w3-content w3-text-light-grey w3-padding-64 container-fluid">
            <h2 class="text-light fw-bolder">How to reach me</h2>
            <hr class="w3-opacity" />
            <div class='container display-6 d-block py-3'>
                <ul class='list-unstyled'>
                    <li><a href="mailto:gabrielgelo93@gmail.com" ><i class="fa-solid fa-envelope py-3"><span class="display-5 w3-wide text-light"> Send me an email!</span></i></a></li>
                    <li><a href="tel:+639276368125" ><i class="fa-solid fa-envelope py-3"><span class="display-5 w3-wide text-light"> Send me a message!</span></i></a></li>
                    <li><a href="https://www.google.com/maps/place/Pasay,+Metro+Manila/@14.5227486,120.9947871,14.04z/data=!4m5!3m4!1s0x3397c949f8efe26d:0x954cef4739256660!8m2!3d14.5377516!4d121.0013794" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope py-3"><span class="display-5 w3-wide text-light"> Meet me here!</span></i></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Contact