import Banner from "./Components/Banner";
import img from "./Images/img_about.png";
import Toggle from "./Components/Toggle";

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
                <Toggle text='Les annonces postées sur Kasa garantissent
                 une fiabilité totale. Les photos sont conformes aux logements,
                 et toutes les informations sont régulièrement vérifiées par
                 nos équipes' title='Fiabilité' />
                <Toggle text='La bienveillances fait partie des
                 valeurs fondatrices de Kasa. Tout comportement
                 discriminatoire ou de perturbation du voisinage
                 entraînera une exclusion de notre plateforme.'
                 title='Respect' />
                <Toggle text='La bienveillances fait partie des
                 valeurs fondatrices de Kasa. Tout comportement
                 discriminatoire ou de perturbation du voisinage
                 entraînera une exclusion de notre plateforme.'
                 title='Service' />
                <Toggle text="La sécurité est la priorite de Kasa.
                 Aussi bien pour nos hôtes que pour les voyageurs,
                 chaque logement correspond aux critères de sécurité
                 établis par nos services. En laissant une note
                 aussi bien à l'hôte qu'au locataire, cela permet
                 à nos équipes de vérifier que les standards sont bien
                 respectés. Nous organisons également des ateliers sur
                 la sécurité domestique pour nos hôtes"
                 title='Sécurité' />
            </div>
        </div>

    );
};

export default About;