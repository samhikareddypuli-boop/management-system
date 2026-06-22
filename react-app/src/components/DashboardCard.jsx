import React from 'react'

function DashboardCard(props) {
    console.log(props)
    return (
        <div class="card">
            <div class="card-body text-center">
                <h5>{props.heading}</h5>
                <h5>{props.count}</h5>
            </div>
        </div>
    )
}

export default DashboardCard