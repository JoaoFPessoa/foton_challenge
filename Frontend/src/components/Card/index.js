import React from 'react'
import 'bulma/css/bulma.min.css';
import './index.css'
import { Link } from 'react-router-dom';


const BookCard = ({book}) => {
return (
 <div className="card-container">
    <ul> 
      
        <li key={book._id}>
        <Link to={`/details/${book._id}`}>
        <img className="card-img" alt="" src={book.image} />
        </Link>
          <h2 className="card-name">{book.name}</h2>
          <h3 className="card-author">by {book.author}</h3>
        </li>

    </ul> 
    </div>
)
}

export default BookCard;