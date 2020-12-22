import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Cocktail = ({ id, glass, image, info, name }) => {
  return (
    <article className="cocktail">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
