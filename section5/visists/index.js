const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
// TODO we will specify host or address to connect to the redis server
const client = redis.createClient({
    // name of image in docker-compose
    host: 'redis-server',
    port: 6379
});
// inicializes visits to 0
client.set('visits', 0);

app.get('/',(req, res)=>{
    // next line is an exit status code to force error
    // process.exit(0);
    // connects redis server to get the number of visists
    client.get('visits', (err, visits)=>{
        res.send('Number of visits is '+ visits);
        // Update number of times visits on redis
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, ()=>{
    console.log('Listening on port 8081');
})