const express = require('express');
const tracklistController = require('../controllers/tracklistController');
const router = express.Router();

// We are passing a REFERENCE to getTracklistByArtist name so that the router can call it with 
// req and res whenever the route is accessed
router.get('/tracklist/:artistName', tracklistController.getTracklistByArtistName);

module.exports = router;
