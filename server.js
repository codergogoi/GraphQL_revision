const express = require('express');
const expressGraphQL = require('express-graphql'); // connector for Graphql
const schema = require('./schema');
const app = express();


app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

 
app.listen(4000, () => {
    console.log('Servere is running on port 4000');
})