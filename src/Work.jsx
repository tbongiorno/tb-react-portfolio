const Work = ({title, description, image, theme}) => {
    return (
        <div className="general-card" style={{ color: theme.cardColor, backgroundColor: theme.cardBackground }}>
            <div className="general-card-image-wrapper">
                <div className="general-card-image">
                    <img 
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="general-image"
                    />
                </div>
            </div>
            <div className="general-content">
                <h3 className="general-title">{title}</h3>
                <p className="general-description">{description}</p>
            </div>
        </div>
    );
}

export default Work;