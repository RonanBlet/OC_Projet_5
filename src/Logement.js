import { Navigate, useParams } from "react-router-dom";
import data from './data/data.json';
import Rating from "./Components/Rating";
import TagList from "./Components/TagList";
import Carousel from "./Components/Carousel";
import Collapse from "./Components/Collapse";
import EquipmentList from "./Components/EquipmentList";

function Logement(){
    const {id} = useParams();
    const logement = data.find(item => item.id === id);

    if(!logement){
        return <Navigate to="*" />;
    }

    return(
        <div class="logement">
            <div class="carrousel">
                <Carousel pictures={logement.pictures} />
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
                        <Collapse title='Description'>
                            {logement.description} 
                        </Collapse>
                    </span>
                    <span>
                        <Collapse title='Equipement'>
                            <EquipmentList equipement={logement.equipments} />
                        </Collapse>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Logement;