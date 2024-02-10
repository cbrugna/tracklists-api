// Handles the logic of processing requests and returning responses. Handles incoming requests, interacts with services to get data, and send responses.

const tracklistService = require('../services/tracklistService');

exports.getTracklistByArtistName = async (req, res) => {
    try {
        const artistName = req.params.artistName;
        const tracklists = await tracklistService.fetchTracklistInfo(artistName);
        res.json(tracklists);
    } catch (error) {
        console.error('Failed to fetch tracklist information:', error);
        res.status(500).json({ error: 'An error occurred while fetching tracklist information.' });
    }
};
