const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const uploadBook = require('./src/middlewares/uploadImage')

const app = express();

const Book = require('./src/models/books');

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})*

mongoose.connect('mongodb://localhost/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com db c/ sucesso')
}).catch((err) => {
    console.log('Erro na conexão com o mongodb')
})

app.get('/', async (req, res) => {
    let name = req.query.name;
if (name) {Book.find({name:new RegExp(".*"+name+".*", "i")}).then((books) => {
        return res.json(books)
    }).catch((err) => {
        return res.status(400).json({status: '404 Not Found'})
    })}else{Book.find({}).then((books) => {
        return res.json(books)
    }).catch((err) => {
        return res.status(400).json({status: '404 Not Found'})
    })
}})


app.post('/registration', async (req, res) => {
    try {
        const book = await Book.create(req.body);

        return res.send({book})
    }catch (err) {
        return res.status(404).send({error: 'Falha no registro'})
    }
})
app.get('/details/:id', async (req, res) => {
    let id = req.params.id;
   await Book.findById(id).then((books) => {
        return res.json(books)
    })
})

app.listen(8080, ()=>{
    console.log('Server listening')
})