function EquipmentList({equipement}){
    return(
        <div>
            {equipement.map((equipement, index) => (
                <p key={index} className="equipement-item">
                    {equipement}
                </p>
            ))}
        </div>
    );
};

export default EquipmentList;