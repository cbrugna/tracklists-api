// The service layer contains the business logic of your application- scraping functionality will be included here.

const tracklistService = require('./tracklistService');

// This will eventually be data from the actual website.
exports.fetchTracklistInfo = async (artistName) => {
    return [
        { title: "Mock Track 1", artist: artistName },
        { title: "Mock Track 2", artist: artistName }
    ];
}
