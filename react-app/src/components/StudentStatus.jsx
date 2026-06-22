import React from 'react'

function StudentStatus(props) {
    return (
        <tr>
            <td>{props.RollNo}</td>
            <td>{props.Name}</td>
            <td>{props.Status}</td>
        </tr>
    )
}

export default StudentStatus