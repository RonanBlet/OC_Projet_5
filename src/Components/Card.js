import {Link} from 'react-router-dom';

function Card({id,title,cover}) {
    return(
      <div className="card">
      <Link to={`/details/${id}`}>
        <h3>{title}</h3>
        <img src={cover} alt={title} />
      </Link>
    </div>
    );
};

export default Card;