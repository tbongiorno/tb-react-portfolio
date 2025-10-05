const Education = ({ name, timeline, description, gpa, image}) => {
    return (
        <div className="general-card">
            <div className="general-card-image">
                <img 
                    src={image}
                    alt={name}
                    className="general-image"
                />
            </div>
            <div className="general-content">
                <h3 className="general-title">{name}</h3>
                <h4 className="general-timeline">{timeline}</h4>
                <h4 className="general-gpa">{gpa}</h4>
                <p className="general-description">{description}</p>
            </div>
        </div>
    );
}

export default Education;