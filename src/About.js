import Banner from "./Components/Banner";
import img from "./Images/img_about.png";
import Scroll from "./Components/Scroll";

function About(){
    return (
        <div class="divAbout">
            <span>
            <Banner
            image={img}
            text=''
            showOverlay={false}
            />
            </span>
            <div class='divScroll'>
                <Scroll text='' title='Fiabilité' />
                <Scroll text='' title='Respect' />
                <Scroll text='' title='Service' />
                <Scroll text='' title='Sécurité' />
            </div>
        </div>

    );
};

export default About;