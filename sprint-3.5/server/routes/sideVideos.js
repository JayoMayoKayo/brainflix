let express = require('express');
let router = express.Router();

let SideVideos = require('../data/SideVideos.json');

router.get('/', (req, res) => {
    res.send(SideVideos);
});

module.exports = router;