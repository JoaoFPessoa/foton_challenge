import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import './index.css'
import NavBar from '../NavBar';
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
</style>

const initialValue = {
    name: '',
    author: '',
    description: '',
    imageUrl: '',
}

const Form = () => {

    const[values, setValues] = useState(initialValue);
    const history = useHistory();
    function onChange(e) {
        const {name, value} = e.target;

        setValues({...values, [name]: value})
    }

    function onSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:8080/registration', values)
        .then((response) => {
            history.push('/')
        })
    }



    return (
        <div class="container">
            <h1 class="add-title">Add a new book</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input id="name" name="name" type="text" onChange={onChange}></input>
                    <label htmlFor="author">Author</label>
                    <input id="author" name="author" type="text" onChange={onChange}></input>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" rows="15" cols="33" type="text" onChange={onChange}></textarea>
                    <label htmlFor="image">ImageUrl</label>
                    {/* SOMENTE URL FUNCIONANDO */}
                    <input id="imageUrl" name="image" type="text" onChange={onChange}></input>
                    <button class="submit-button" type="submit">Add a new book</button>
                </div>
                <NavBar />
            </form>
        </div>
    )
}

export default Form;