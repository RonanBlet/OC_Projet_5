import { useParams } from "react-router-dom";
import data from './data/data.json';
import Scroll from "./Components/Scroll";

function Logement(){
    const {id} = useParams();
    const logement = data.find(item => item.id === id);

    if(!logement){
        return <div>Card not found</div>;
    }

    return(
        <div class="logement">
            <div class="carrousel">
                <img src={logement.pictures[0]} alt=""/>
            </div>
            <div class='description'>
                <div class='description_gauche'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div class='description_droite'>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="Proprietaire du logement"/>
                    
                </div>
            </div>
            <div class ='listing'>
                <Scroll
                title='Description'
                text={logement.description} 
                />

                <Scroll
                title='Equipement'
                text={logement.equipments}
                />
            </div>
        </div>
    );
}

export default Logement;