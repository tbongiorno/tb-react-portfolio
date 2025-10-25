const Contact = ({ platform, url, image, theme}) => {
    function checkEmail() {
        if (platform.includes("Email") === true){
            return <a href="mailto:{url}">{url}</a>
        } if (platform === "Phone Number"){
            return <p>{url}</p>
        }
        else { 
            return <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
            </a>
        }
    }
    return (
        <div className="general-card" style={{ color: theme.cardColor, backgroundColor: theme.cardBackground }}>
            <div className="general-card-image-wrapper">
                <div className='general-card-image'>
                    <img 
                        src={image}
                        alt={platform}
                        loading="lazy"
                        className="general-image"
                    />
                </div>
            </div>
            <div className="general-content">
                <div className="contact-item">
                    <h3>{platform}</h3>
                    {checkEmail()}
                </div>
            </div>
            
        </div>
    )
}

export default Contact;