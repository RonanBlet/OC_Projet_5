import {Link} from 'react-router-dom';

function Card({id,title,cover}) {
    return(
      <div className="card">
      <Link to={`/details/${id}`}>
        <div className='img-container'>
          <img src={cover} alt={title} />
          <div className='overlayCard'></div>
        </div>
        <h3>{title}</h3> 
      </Link>
    </div>
    );
};

export default Card;