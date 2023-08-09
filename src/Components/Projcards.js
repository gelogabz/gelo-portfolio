import React from 'react'

function Projcards(props) {
    const { projTitle, projTools, projDesc, projLink, projLogo } = props;

    return (
        <div class="card bg-transparent mb-3" style={{ maxWidth: "100%" }}>

            <div class="row g-0 align-items-start justify-content-center rounded-4">
                <div class="col-lg-5 my-3  mx-auto">
                    <img src={projLogo} class="border img-fluid rounded-3" alt="projlogo" style={{ width: "90%", height: '200px', margin: 'auto' }} />

                </div>
                <div class="col-lg-7 px-2">
                    <a href={projLink} class="w-100 btn btn-lg btn-outline-success text-light mt-3 mx-auto" target="_blank" rel="noreferrer">{projTitle}</a>
                    <p class="card-subtitle text-start mx-2 px-auto py-2"><b>Tools used: </b>{projTools}</p>
                    <div class="card-body">
                        <ul>
                            <li><p class="w3-small card-text">{projDesc}</p></li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projcards