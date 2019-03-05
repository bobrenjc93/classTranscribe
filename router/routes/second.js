/** Copyright 2015 Board of Trustees of University of Illinois
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const mkdirp = require('mkdirp');
const validator = require('../../modules/validator.js');

const client_api = require('./db');

//var secondPassMustache = fs.readFileSync(mustachePath + 'editor.mustache').toString();


router.get('/second/:className/:id', function (request, response) {
  var className = request.params.className.toUpperCase();
  response.writeHead(200, {
    'Content-Type': 'text/html',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS"
  });

  var view = {
    className: className,
    taskName: request.query.task,
  };
  var html = Mustache.render(Mustache.getMustacheTemplate('editor.mustache'), view);
  response.end(html);
});


/* saves the transcriptions */
router.post('/second', function (request, response) {
  var stats = JSON.parse(request.body.stats);
  var transcriptions = request.body.transcriptions;//
  var className = request.body.className.toUpperCase();//
  var statsFileName = stats.video.replace(/\ /g, "_") + "-" + stats.name + ".json";
  //var captionFileName = stats.video.replace(/\ /g, "_") + "-" + stats.name + ".txt";
  var captionFileName = stats.video.replace(/\ /g, "_");
  var transcriber = stats.name;
  var taskName = stats.video.replace(/\ /g, "_");
  mkdirp("captions/second/" + className, function (err) {
    if (err) {
      console.log(err);
    }
    transcriptionPath = "captions/second/" + className + "/" + captionFileName;
    client_api.addCaption(className, [captionFileName, transcriptions, transcriber]);
    // client.sadd("ClassTranscribe::Transcriptions::" + className + "::" + captionFileName, transcriptions);
    // client.sadd("ClassTranscribe::Transcribers::" + className, captionFileName + "_" + transcriber);
    fs.writeFileSync(transcriptionPath, transcriptions, { mode: 0777 });
  });

  mkdirp("stats/second/" + className, function (err) {
    if (err) {
      console.log(err);
    }
    statsPath = "stats/second/" + className + "/" + statsFileName;
    client_api.addStatsPath(statsPath, request.body.stats);
    // client.sadd("ClassTranscribe::Stats::" + statsPath, request.body.stats);
    fs.writeFileSync(statsPath, request.body.stats, { mode: 0777 });


    var isTranscriptionValid = validator.validateTranscription("stats/second/" + className + "/" + statsFileName);

    if (isTranscriptionValid) {
      console.log("Transcription is good!");
      client_api.submitTranscription(className, taskName, function(err, score) {
      // client.zincrby("ClassTranscribe::Submitted::" + className, 1, taskName);
      // client.zscore("ClassTranscribe::Submitted::" + className, taskName, function (err, score) {
        score = parseInt(score, 10);
        if (err) {
          return err;
        }

        if (score === 10) {
          client_api.prioritize(className, taskName);
          // client.zrem("ClassTranscribe::Submitted::" + className, taskName);
          // client.zrem("ClassTranscribe::PrioritizedTasks::" + className, taskName);
        }

        // client.sadd("ClassTranscribe::First::" + className, captionFileName);
        client_api.addFirst(className, captionFileName);
        var netIDTaskTuple = stats.name + ":" + taskName;
        console.log('tuple delete: ' + netIDTaskTuple);
        client_api.removeTranscriber(className, netIDTaskTuple);
        // client.hdel("ClassTranscribe::ActiveTranscribers::" + className, netIDTaskTuple);
        //sendProgressEmail(className, stats.name);
        return;
      });
    } else {
      console.log("Transcription is bad!");
      client_api.failTranscription(className, captionFileName);
      // client.lpush("ClassTranscribe::Failed::" + className, captionFileName);
      return;
    }
    response.send("success!");
  });
});

module.exports = router;
