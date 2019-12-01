require('dotenv').config();
const express = require('express');
const cors = require('cors');
const qraphqlIHTTP = require('express-graphql');
const mongoose = require('mongoose');
const PORT = 4000;
const schema = require('./schema/schema');

const app = express();
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.MONGOOUSERNAME}:${process.env.PASSWORD}@booksandauthorsgql-asso8.mongodb.net/${process.env.DATABASENAME}?retryWrites=true&w=majority`, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true 
});
mongoose.connection.once('open', () => {
    console.log('Connected to DataBase');
})

app.use('/graphql', qraphqlIHTTP({
    schema,
    graphiql: true
})); 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})