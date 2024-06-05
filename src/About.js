import Banner from "./Components/Banner";
import img from "./Images/img_about.png";
import Collapse from "./Components/Collapse";

function About(){
    return (
        <div className="divAbout">
            <span>
            <Banner
            image={img}
            text=''
            showOverlay={false}
            />
            </span>
            <div className='divScroll'>
                <Collapse title='Fiabilité'>
                    <p>
                        Les annonces postées sur Kasa garantissent
                        une fiabilité totale. Les photos sont conformes aux logements,
                        et toutes les informations sont régulièrement vérifiées par
                        nos équipes
                    </p>
                </Collapse>
                <Collapse title='Respect' >
                    <p>
                        La bienveillances fait partie des
                        valeurs fondatrices de Kasa. Tout comportement
                        discriminatoire ou de perturbation du voisinage
                        entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>
                <Collapse title='Service'>
                    <p>
                        La bienveillances fait partie des
                        valeurs fondatrices de Kasa. Tout comportement
                        discriminatoire ou de perturbation du voisinage
                        entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>
                <Collapse title='Sécurité' >
                    <p>
                        La sécurité est la priorite de Kasa.
                        Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité
                        établis par nos services. En laissant une note
                        aussi bien à l'hôte qu'au locataire, cela permet
                        à nos équipes de vérifier que les standards sont bien
                        respectés. Nous organisons également des ateliers sur
                        la sécurité domestique pour nos hôtes
                    </p>
                </Collapse>
            </div>
        </div>

    );
};

export default About;