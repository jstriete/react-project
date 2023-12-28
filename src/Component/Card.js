export default function Card(props) { 
    return ( 
        <div className="card">
            <img src={props.src} alt={props.alt} className="card-image"/>
            <div className="card-content">
                <div className="card-location-info">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/608/471/small/mobile-application-gps-navigation-pointer-web-button-menu-digital-silhouette-style-icon-free-vector.jpg" alt="nav-icon" className="card-icon"/>
                    <h4 className="card-location">{props.location}</h4>
                    <a href={props.link} rel="noreferrer" target="_blank" className="card-link">View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <h4 className="card-time">{props.startTime} - {props.endTime}</h4>
                <div className="card-text"><p>{props.text}</p></div>
            </div>
        </div>
    );
}