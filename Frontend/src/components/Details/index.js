import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
                <article>
                    <h2> {books.name}</h2>
                        <h3> {books._id}</h3>
                        <img className="card-img" alt="" src={books.image} />
                </article>
            )

}

export default Detail
