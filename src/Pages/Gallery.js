import React from 'react'
import '../App.css';
import photogrid1 from "../assets/images/20211121_063103.jpg"
import photogrid2 from "../assets/images/20220501_054632.jpg"
import photogrid3 from "../assets/images/20220618_065114.jpg"
import photogrid4 from "../assets/images/20220618_095214.jpg"
import photogrid5 from "../assets/images/IMG_20180729_053441.jpg"
import photogrid6 from "../assets/images/IMG_20181014_140152.jpg"
import photogrid7 from "../assets/images/IMG_20200802_214122_952.jpg"
import photogrid8 from "../assets/images/AePup1.jpg"

function Gallery() {
    return (
        <section class="w3-content w3-justify w3-text-light-grey w3-padding-64 container-fluid">
            <div class="container align-items-center px-4">
                <h2 class="text-light fw-bolder mx-3">My Photo Gallery</h2>
                <hr class="w3-opacity mx-3" />
                <p class="mx-3">
                    This page is just for fun but feel free to browse!
                    I'm a hobbyist photographer focused on nature landscapes, portrait, and sepia-themed shots.
                    Hope you like it!
                </p>

                <div class="photogrid-main w3-row-padding">
                    <div class="w3-half">
                        <img src={photogrid1} alt='photogrid' class="photo-grid-pic m-2 img-thumbnail" />
                        <img src={photogrid2} alt='photogrid' class="photo-grid-pic m-2 img-thumbnail" />
                        <img src={photogrid3} alt='photogrid' class="photo-grid-pic m-2 img-thumbnail" />
                        <img src={photogrid4} alt='photogrid' class="photo-grid-pic m-2 img-thumbnail" />
                    </div>

                    <div class="w3-half">
                        <img src={photogrid5} alt='photogrid' class="photo-grid-pic m-2 img-thumbnail" />
                        <img src={photogrid6} alt='photogrid' class="photo-grid-pic m-2 img-thumbnail" />
                        <img src={photogrid7} alt='photogrid' class="photo-grid-pic m-2 img-thumbnail" />
                        <img src={photogrid8} alt='photogrid' class="photo-grid-pic m-2 img-thumbnail" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery