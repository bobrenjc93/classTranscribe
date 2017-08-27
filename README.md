# ![ClassTranscribe](http://i.imgur.com/jvyjBXY.png)

ClassTranscribe is an open-source, web-based platform that leverages crowdsourcing to address the problem of accurate,
reliable and fast transcriptions of college lectures. Completed transcriptions provide search functionality that augments
existing lecture recordings and enable enhanced educational features including closed captioning. Read the ClassTranscribe paper here - [https://www.slate2015.org/files/submissions/Ren15-CAN.pdf](https://www.slate2015.org/files/submissions/Ren15-CAN.pdf)

## How to run your own instance of ClassTranscribe

1. Install Docker on your machine using one of the following OS specific tutorials: [linux](https://docs.docker.com/linux/step_one/), [mac](https://docs.docker.com/mac/step_one/) or [windows](https://docs.docker.com/windows/step_one/).
2. Pull down the ClassTranscribe container by running `docker pull pranaygp/classtranscribe`.
3. If you are contributing to an existing ClassTranscribe instance, ask the admin for the redis and email credentials. 
Otherwise, setup your own gmail account, and do one of the following for redis:
    1. **Preferred** Setup a docker instance running redis ([we use this](https://hub.docker.com/_/redis/))
    2. Run your own redis instance ([tutorial here](http://redis.io/topics/quickstart))
4. Run the ClassTranscribe docker image locally by running `docker run -i -t -p 443:8000 -p 80:7000 --link REDIS_CONTAINER_NAME:redis -e "REDIS_PASS=<redis password>" -e "MAILER_ID=<email>" -e "MAILER_PASS=<pass>" pranaygp/classtranscribe /bin/bash -c "npm install; npm start"`. If you're not running a docker instance for redis, then remove `--link REDIS_CONTAINER_NAME:redis` and instead, have `-e "REDIS_HOST=<redis url>` to point to your redis db

## How to run a docker build if you have the source code (DO THIS WHEN YOU CHANGE CODE AND CONFIRM IT WORKS - It effectively tests in a production like environment)

1. `docker build -t classtranscribe .`
2. `docker run -i -t -p 443:8000 -p 80:7000 --link REDIS_CONTAINER_NAME:redis -e "REDIS_PASS=<redis password>" -e "MAILER_ID=<email>" -e "MAILER_PASS=<pass>" classtranscribe /bin/bash -c "npm install; npm start"`
> Please prefer using a docker container running redis rather than hitting a production database when testing

## How to launch a class

1. Download lecture videos for a course, place in a directory.
2. Rename videos to follow format Lecture_`<lecture_index>`.`<any video file format (wmv/m4a/etc)>`.
3. Copy convert.sh script to directory with videos `cp utility_scripts/convert.sh <path_to_directory_with_videos>`.
4. Run convert.sh `<path_to_directory_with_videos>/convert.sh`. This will transcode all the videos and may take a while.
5. Split videos into 4-6 minute chunks by running `node utility_scripts/splitRunner.js <path_to_directory_with_videos>`.
6. Upload videos to S3 (May need to install s3cmd utility) `s3cmd put --acl-public -r ./ s3://<s3_bucket_name>/<class_name>/`.
7. Initialize transcription tasks in redis queue by running `node utility_scripts/taskInitializer.js <path_to_directory_with_videos> <class_name>`.
8. Send an email to your students. Below is an example email template:

> Dear `<class_name>` students, 
> 
> As discussed in lecture, we will be transcribing the focus groups for `<class_name>`. 
> 
> Completed transcriptions will enable you to search through the entire semesters' lecture videos and skip to the exact segment where a segment was covered (very useful when studying for exams!). As a quick demo, you can search through the entire UIUC CS241 2015 Spring semester here: http://classtranscribe.com. Try searching for "Buffer Overflow" or "Segmentation Fault"! Once progress has been made on the backlog of lectures the homepage will be updated to search <class_name>.
> 
> <insert motivation (ideally Extra Credit) and policies>
>
> Below are the steps to get started
>
> 1. Read this tutorial on how to use ClassTranscribe: http://tinyurl.com/classtranscribetutorial
>
> 2. To begin a transcription task (~15 min) go to `http://classtranscribe.com/queue/<class_name>`. You will revisit this link in the future to get another task.
> 
> 3. Visit `http://classtranscribe.com/progress/<class_name>` to view the progress that you and your classmates have made!
>
> 4. You can view and search finished transcriptions at `http://classtranscribe.com/<class_name>`
>
> If you have any questions or concerns regarding the transcription process, please don't hesitate to email `<admin_email_address>`. 
> 
> Thanks, `<professor_name>`

## How to upload finished transcriptions

1. Have the latest version of transcriptions in your local repository by running `git pull origin master`.
2. Run `utility_scripts/videoGenerator.js <class_name>` to generate a list of videos. Create/Modify `javascripts/data/videos/<classname>.js` accordingly.
3. Run `utility_scripts/captionGenerator.js <class_name>` to generate a list of captions. Create/Modify `javascripts/data/captions/<classname>.js` accordingly.
4. If it's the first time uploading transcriptions, modify the `exampleTerms` and `captionsMapping` configuration in `server.js` to add example terms and mappings to the video and caption files accordingly.
5. Restart the server. 
