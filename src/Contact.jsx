const Contact = ({ platform, url, image }) => {
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
        <div className="general-card">
            <div className="general-card-image-wrapper">
                <div className='general-card-image'>
                    <img 
                        src={image}
                        alt={platform}
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