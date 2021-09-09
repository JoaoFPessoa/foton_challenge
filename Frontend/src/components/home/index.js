import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import BookCard from '../Card/index'
import './index.css'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        const params = {}
        if (search){
          params.name = search;
        }
        axios.get('http://localhost:8080', { params })
        .then((response) => {
            setBooks(response.data)
        });
    }, [search])

return (
    <div className="container">
    <input 
    type="search" 
    placeholder="Search book" 
    className="input"
    value={search}
    onChange={(ev) => setSearch(ev.target.value) }
     />
    <h1 className="subtitle">Hi, <span className="has-text-danger"> Mehmed Al Fatih </span></h1>
    <div>
  {books.map((book) => (
    <BookCard book={book} />
  ))}
    </div>
    </div>
)
}
export default Home;
