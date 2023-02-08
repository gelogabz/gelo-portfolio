import React from 'react'

function Skillscards(props) {

    const { skillsTitle, skillsValue } = props;

    return (
        <div class='rounded-4 shadow m-1 p-2'>
            <span class="w3-medium lead">{skillsTitle}</span>
            <meter class="skills-item w-100" value={skillsValue} max="100" style={{ borderRadius: '20px' }}>
            </meter>
        </div>
    )
}

export default Skillscards