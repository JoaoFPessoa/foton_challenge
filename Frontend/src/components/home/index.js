import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../Card/index'
import './index.css'
import NavBar from '../NavBar';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [visible, setVisible] = useState(3)
    
    const showMoreItems = () => {
      setVisible(prevValue => prevValue+3)
    }

    useEffect(() =>{
        const params = {}
        if (search){
          params.name = search;
        }
        axios.get('http://localhost:8080', { params })
        .then((response) => {
            setBooks(response.data)
            console.log(response.data)
        });
    }, [search])

return (
    <div className="container">
    <input 
    type="search" 
    placeholder="&#xf002; Search Book" 
    className="input"
    value={search}
    onChange={(ev) => setSearch(ev.target.value) }
     />
    <h1 className="subtitle">Hi, <span className="has-text-danger"> Mehmed Al Fatih👋</span></h1>
    <div className="grid">
  {books.slice(0, visible).map((book) => (
    <BookCard book={book} />
  ))}
    </div>
    <div className="load-button">
    <button onClick={showMoreItems}>Load More</button>
    </div>
    <NavBar />
    </div>
)
}
export default Home;
