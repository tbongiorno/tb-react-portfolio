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
                <h4 className="general-timeline">Timeline: {timeline}</h4>
                <h4 className="general-gpa">Overall GPA: {gpa}</h4>
            </div>
        </div>
    );
}

export default Education;