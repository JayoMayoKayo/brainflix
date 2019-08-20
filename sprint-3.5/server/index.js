//Requirements for server
const express = require('express');
const app = express();
let cors = require('cors');

//Routing Variables
const mainVideosRoute = require('./routes/mainVideos.js');
const sideVideosRoute = require('./routes/sideVideos.js');

//Express middleware
app.use(cors());
app.use(express.json());

//Testing if the server is working, I hope it does...
app.get('/', (req, res) => {
    res.send('Testing Testing Testing...');
})

//Routing for the server
//app.use('/:id', mainVideosRoute);
app.use('/sideVideos', sideVideosRoute);

app.listen(8001, () => {
    console.log('server is running, better go catch it...');
});

