import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import './index.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
</style>

const Detail = () => {
    const [books, setBooks] = useState({});
    const {id} = useParams();
    console.log(id)

    useEffect(() =>{
        axios.get(`http://localhost:8080/details/${id}`)
        .then((response) => {
            setBooks(response.data)
            //console.log(response.data)
        });
        
    }, []);
    

    return (
                <div class="details-container">
                    <img className="detail-card-img" alt="" src={books.image} />
                    <h2 className="title">{books.name}</h2>
                    <h3 className="author">{books.author}</h3>
                    <p class="description">{books.description}</p>
                        <NavBar />
                </div>
            )

}

export default Detail
