function Banner({image, text, showOverlay}) {
    return (
        <div class ='banner' style={{ backgroundImage: `url(${image})` }} >
            {showOverlay && <div class='overlay'></div>}
            {text && <p>{text}</p>}
        </div>
    );
};

export default Banner;