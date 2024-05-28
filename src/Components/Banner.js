function Banner({image, text, showOverlay}) {
    return (
        <div class ='banner'>
            <div class="img-container">
                <img src={image} alt=""/>
                {showOverlay && <div class='overlay'></div>}
            </div>
                <p>{text}</p>
        </div>
    );
};

export default Banner;