// Member contact card component

export default function Member({ details }) {
    if(!details) {return <h3>Fetching member details...</h3>}

    return (
        <div className="member container">
            <h2>{details.first_name} {details.last_name}</h2>
            
        </div>
    )
}