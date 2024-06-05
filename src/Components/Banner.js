function Banner({image, text, showOverlay}) {
    return (
        <div className ='banner'>
            <div className="img-container">
                <img src={image} alt=""/>
                {showOverlay && <div className='overlay'></div>}
            </div>
                <p>{text}</p>
        </div>
    );
};

export default Banner;