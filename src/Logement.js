import { useParams } from "react-router-dom";
import data from './data/data.json';
import Toggle from "./Components/Toggle";
import Rating from "./Components/Rating";
import TagList from "./Components/TagList";

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
                <div class='description_haut'>
                    <div class='description_gauche'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div class='description_droite'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="Proprietaire du logement"/>
                    </div>
                </div>
                <div className="description_bas">
                    <div>
                        <TagList tags={logement.tags}/>
                    </div>
                    <div>
                        <Rating rating={logement.rating}/>
                    </div>
                </div>
                <div class ='listing'>
                    <span>
                        <Toggle
                        title='Description'
                        text={logement.description} 
                        />
                    </span>
                    <span>
                        <Toggle
                        title='Equipement'
                        text={logement.equipments}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Logement;