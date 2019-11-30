const express = require('express');
const qraphqlIHTTP = require('express-graphql');
const PORT = 3000;
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', qraphqlIHTTP({
    schema,
    graphiql: true
})); 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})