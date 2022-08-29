import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, email, id }) => {

  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <>
          <Link className='text-decoration-none text-dark' to={`/details/${id}`}>
            <h2>{name}</h2>
            <p>{email}</p>
          </Link>
          <Link className='text-decoration-none text-dark btn btn-light-dark' to={`/post/${id}/`}>
            <h2>Post</h2>
          </Link>
        </>
      </div>
    </div>
  );
}

export default Card;
