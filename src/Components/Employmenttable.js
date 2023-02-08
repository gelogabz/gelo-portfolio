import React from 'react'

function Employmenttable(props) {

    const { lastEmployer, employmentDate, jobRole, jobSummary } = props;
    return (
        <tbody>
            <tr class="w3-small lh-2">
                <td class="w-25">{employmentDate}</td>
                <td class="w-auto">{lastEmployer}</td>
                <td class="w-25">{jobRole}</td>
                <td class=' w-50 text-start'>
                    <ul>
                        <li>{jobSummary}</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    )
}

export default Employmenttable