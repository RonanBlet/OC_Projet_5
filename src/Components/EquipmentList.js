function EquipmentList({equipement}){
    return(
        <div>
            {equipement.map((equipement, index) => (
                <div key={index} className="equipement-item">
                    {equipement}
                </div>
            ))}
        </div>
    );
};

export default EquipmentList;