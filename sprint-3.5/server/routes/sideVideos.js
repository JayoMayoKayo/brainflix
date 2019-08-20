let express = require('express');
let router = express.Router();
let uuid = require('uuid/v1');

let SideVideos = require('../data/SideVideos.json');

router.get('/', (req, res) => {
  res.send(SideVideos);
});
router.post('/', (req, res) => {
  let {body} = req;
  
  let newVideo = {
    
  }

  console.log(body);
})
module.exports = router;