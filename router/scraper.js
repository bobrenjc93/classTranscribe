﻿/** Copyright 2015 Board of Trustees of University of Illinois
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var router = express.Router();
var fs = require('fs');
var scraper = require('../../modules/scraper_utils');
//var scraperMustache = fs.readFileSync(mustachePath + 'scraper.mustache').toString();


router.get('/scraper', function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text.html'
    });
    console.log(request.query.channelId);
    scraper.youtube_scraper_channel(request.query.channelId)
        .then(function (playlists) {
            console.log(playlists);
        });
    renderWithPartial(Mustache.getMustacheTemplate('scraper.mustache'), request, response);
});

router.get('/scrapeEchoSection', function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text.html'
    });
    var url = request.query.publicUrl;
    var courseOfferingId = request.query.courseOfferingId;
    console.log(url, courseOfferingId);
    scraper.download_public_echo_course(url, courseOfferingId)
    renderWithPartial(Mustache.getMustacheTemplate('scraper.mustache'), request, response);
});
router.get('/scrapeYoutubePlaylist', function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text.html'
    });
    var playlistId = request.query.playlistId;
    var courseOfferingId = request.query.courseOfferingId;
    console.log(playlistId, courseOfferingId);
    scraper.download_youtube_playlist(playlistId, courseOfferingId);
    renderWithPartial(Mustache.getMustacheTemplate('scraper.mustache'), request, response);
});

router.get('/addLocalVideosToCourse',async function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text.html'
    });
    var jsonFile = request.query.jsonFile;
    var courseOfferingId = request.query.courseOfferingId;
    console.log(jsonFile, courseOfferingId);
    await scraper.addLocalVideosToCourse(jsonFile, courseOfferingId);
    renderWithPartial(Mustache.getMustacheTemplate('scraper.mustache'), request, response);
});

router.get('/downloadLecture', function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text.html'
    });
    scraper.download_lecture(request.query.taskId)
    renderWithPartial(Mustache.getMustacheTemplate('scraper.mustache'), request, response);
});

router.get('/reprocessIncompleteTasks', async function (request, response) {
    var courseOfferingId = request.query.courseOfferingId;
    await scraper.reprocessIncompleteTaskIdsForCourseOfferingId(courseOfferingId);
});

router.get('/reprocessIncompleteMedias', async function (request, response) {
    var courseOfferingId = request.query.courseOfferingId;
    await scraper.reprocessIncompleteMedias(courseOfferingId);
});


module.exports = router;
