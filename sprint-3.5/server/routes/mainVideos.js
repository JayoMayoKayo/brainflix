let express = require('express');
let MainVideos = require('../data/mainVideos.json');
let uuid = require('uuid/v1');

let router = express.Router();

router.get('id', (req, res) => {
  
})

router.get('/', (req, res) => {
  res.send(MainVideos);
});
router.post('/', (req, res) => {
  
  let newVideo = {
    id : uuid(),
    title : req.body.title,
    channel : '',
    image : req.body.image,
    description : req.body.description,
    views : 0,
    likes : 0,
    duration : "3:00",
    video : 'https://www.youtube.com/watch?v=vKlybue_yMQ',
    timestamp : 555,
    comments : []
  }
  
  MainVideos.push(newVideo);

  res.status(201);
  res.send(newVideo);

  console.log("worked!");
  console.log(body);
})

module.exports = router;