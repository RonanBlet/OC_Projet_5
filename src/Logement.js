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
        <div className="logement">
            <div className="carrousel">
                <Carousel pictures={logement.pictures} />
            </div>
            <div className='description'>
                <div className='description_haut'>
                    <div className='description_gauche'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <TagList tags={logement.tags}/>
                    </div>
                    <div className='description_droite'>
                        <div className="owner">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} alt="Proprietaire du logement"/>
                        </div>
                        <Rating rating={logement.rating}/>
                    </div>
                </div>
                <div className ='listing'>
                    <Collapse title='Description'>
                            {logement.description} 
                    </Collapse>
                    <span id="espace"></span>
                    <Collapse title='Equipement'>
                            <EquipmentList equipement={logement.equipments} />
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default Logement;