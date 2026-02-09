const Education = ({ name, timeline, gpa, image, theme}) => {
    return (
        <div className="general-card" style={{ color: theme.cardColor, backgroundColor: theme.cardBackground }}>
            <div className="general-card-image-wrapper">
                <div className="general-card-image">
                    <img 
                        src={image}
                        alt={name}
                        loading="lazy"
                        className="general-image"
                    />
                </div>
            </div>
            <div className="general-content">
                <h3 className="general-title">{name}</h3>
                <p className="general-timeline">Timeline: {timeline}</p>
                <p className="general-gpa">Overall GPA: {gpa}</p>
            </div>
        </div>
    );
}

export default Education;