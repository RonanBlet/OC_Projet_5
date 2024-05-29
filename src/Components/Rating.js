import emptyStar from '../Images/etoile_vide.svg';
import star from '../Images/etoile_pleine.svg';


function Rating({rating}){
    const stars = Array(5).fill(false).map((_, index)=> index < rating);

    return(
        <div>
            {stars.map((filled, index) => (
                <img
                key={index}
                src={filled ? star : emptyStar}
                className='star'
                alt='notation'
                />
            ))}
        </div>
    );
};

export default Rating;