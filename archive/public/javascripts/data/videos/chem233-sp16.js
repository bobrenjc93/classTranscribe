var VIDEOS = [
  // ["video title", "video source"]
  ["Full Lecture Video 01 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_01/Full_Lecture_Video_01_part0.mp4"],
  ["Full Lecture Video 01 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_01/Full_Lecture_Video_01_part1.mp4"],
  ["Full Lecture Video 01 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_01/Full_Lecture_Video_01_part2.mp4"],
  ["Full Lecture Video 01 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_01/Full_Lecture_Video_01_part3.mp4"],
  ["Full Lecture Video 02 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_02/Full_Lecture_Video_02_part0.mp4"],
  ["Full Lecture Video 02 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_02/Full_Lecture_Video_02_part1.mp4"],
  ["Full Lecture Video 03 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_03/Full_Lecture_Video_03_part0.mp4"],
  ["Full Lecture Video 03 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_03/Full_Lecture_Video_03_part1.mp4"],
  ["Full Lecture Video 03 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_03/Full_Lecture_Video_03_part2.mp4"],
  ["Full Lecture Video 03 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_03/Full_Lecture_Video_03_part3.mp4"],
  ["Full Lecture Video 04 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_04/Full_Lecture_Video_04_part0.mp4"],
  ["Full Lecture Video 04 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_04/Full_Lecture_Video_04_part1.mp4"],
  ["Full Lecture Video 04 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_04/Full_Lecture_Video_04_part2.mp4"],
  ["Full Lecture Video 04 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_04/Full_Lecture_Video_04_part3.mp4"],
  ["Full Lecture Video 05 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_05/Full_Lecture_Video_05_part0.mp4"],
  ["Full Lecture Video 05 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_05/Full_Lecture_Video_05_part1.mp4"],
  ["Full Lecture Video 06 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_06/Full_Lecture_Video_06_part0.mp4"],
  ["Full Lecture Video 06 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_06/Full_Lecture_Video_06_part1.mp4"],
  ["Full Lecture Video 07 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_07/Full_Lecture_Video_07_part0.mp4"],
  ["Full Lecture Video 07 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_07/Full_Lecture_Video_07_part1.mp4"],
  ["Full Lecture Video 07 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_07/Full_Lecture_Video_07_part2.mp4"],
  ["Full Lecture Video 07 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_07/Full_Lecture_Video_07_part3.mp4"],
  ["Full Lecture Video 08 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_08/Full_Lecture_Video_08_part0.mp4"],
  ["Full Lecture Video 08 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_08/Full_Lecture_Video_08_part1.mp4"],
  ["Full Lecture Video 08 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_08/Full_Lecture_Video_08_part2.mp4"],
  ["Full Lecture Video 09 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_09/Full_Lecture_Video_09_part0.mp4"],
  ["Full Lecture Video 09 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_09/Full_Lecture_Video_09_part1.mp4"],
  ["Full Lecture Video 09 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_09/Full_Lecture_Video_09_part2.mp4"],
  ["Full Lecture Video 09 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_09/Full_Lecture_Video_09_part3.mp4"],
  ["Full Lecture Video 09 part4","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_09/Full_Lecture_Video_09_part4.mp4"],
  ["Full Lecture Video 10 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_10/Full_Lecture_Video_10_part0.mp4"],
  ["Full Lecture Video 10 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_10/Full_Lecture_Video_10_part1.mp4"],
  ["Full Lecture Video 11 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_11/Full_Lecture_Video_11_part0.mp4"],
  ["Full Lecture Video 11 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_11/Full_Lecture_Video_11_part1.mp4"],
  ["Full Lecture Video 11 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_11/Full_Lecture_Video_11_part2.mp4"],
  ["Full Lecture Video 12 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_12/Full_Lecture_Video_12_part0.mp4"],
  ["Full Lecture Video 12 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_12/Full_Lecture_Video_12_part1.mp4"],
  ["Full Lecture Video 13 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_13/Full_Lecture_Video_13_part0.mp4"],
  ["Full Lecture Video 13 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_13/Full_Lecture_Video_13_part1.mp4"],
  ["Full Lecture Video 13 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_13/Full_Lecture_Video_13_part2.mp4"],
  ["Full Lecture Video 13 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_13/Full_Lecture_Video_13_part3.mp4"],
  ["Full Lecture Video 13 part4","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_13/Full_Lecture_Video_13_part4.mp4"],
  ["Full Lecture Video 13 part5","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_13/Full_Lecture_Video_13_part5.mp4"],
  ["Full Lecture Video 13 part6","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_13/Full_Lecture_Video_13_part6.mp4"],
  ["Full Lecture Video 14 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_14/Full_Lecture_Video_14_part0.mp4"],
  ["Full Lecture Video 14 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_14/Full_Lecture_Video_14_part1.mp4"],
  ["Full Lecture Video 14 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_14/Full_Lecture_Video_14_part2.mp4"],
  ["Full Lecture Video 15 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_15/Full_Lecture_Video_15_part0.mp4"],
  ["Full Lecture Video 15 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_15/Full_Lecture_Video_15_part1.mp4"],
  ["Full Lecture Video 15 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_15/Full_Lecture_Video_15_part2.mp4"],
  ["Full Lecture Video 16 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_16/Full_Lecture_Video_16_part0.mp4"],
  ["Full Lecture Video 17 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_17/Full_Lecture_Video_17_part0.mp4"],
  ["Full Lecture Video 17 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_17/Full_Lecture_Video_17_part1.mp4"],
  ["Full Lecture Video 17 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_17/Full_Lecture_Video_17_part2.mp4"],
  ["Full Lecture Video 17 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_17/Full_Lecture_Video_17_part3.mp4"],
  ["Full Lecture Video 17 part4","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_17/Full_Lecture_Video_17_part4.mp4"],
  ["Full Lecture Video 18 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_18/Full_Lecture_Video_18_part0.mp4"],
  ["Full Lecture Video 18 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_18/Full_Lecture_Video_18_part1.mp4"],
  ["Full Lecture Video 18 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_18/Full_Lecture_Video_18_part2.mp4"],
  ["Full Lecture Video 18 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_18/Full_Lecture_Video_18_part3.mp4"],
  ["Full Lecture Video 19 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_19/Full_Lecture_Video_19_part0.mp4"],
  ["Full Lecture Video 19 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_19/Full_Lecture_Video_19_part1.mp4"],
  ["Full Lecture Video 19 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_19/Full_Lecture_Video_19_part2.mp4"],
  ["Full Lecture Video 20 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_20/Full_Lecture_Video_20_part0.mp4"],
  ["Full Lecture Video 21 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_21/Full_Lecture_Video_21_part0.mp4"],
  ["Full Lecture Video 21 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_21/Full_Lecture_Video_21_part1.mp4"],
  ["Full Lecture Video 21 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_21/Full_Lecture_Video_21_part2.mp4"],
  ["Full Lecture Video 21 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_21/Full_Lecture_Video_21_part3.mp4"],
  ["Full Lecture Video 21 part4","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_21/Full_Lecture_Video_21_part4.mp4"],
  ["Full Lecture Video 21 part5","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_21/Full_Lecture_Video_21_part5.mp4"],
  ["Full Lecture Video 22 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_22/Full_Lecture_Video_22_part0.mp4"],
  ["Full Lecture Video 22 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_22/Full_Lecture_Video_22_part2.mp4"],
  ["Full Lecture Video 22 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_22/Full_Lecture_Video_22_part3.mp4"],
  ["Full Lecture Video 23 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_23/Full_Lecture_Video_23_part0.mp4"],
  ["Full Lecture Video 23 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_23/Full_Lecture_Video_23_part1.mp4"],
  ["Full Lecture Video 24 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_24/Full_Lecture_Video_24_part0.mp4"],
  ["Full Lecture Video 24 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_24/Full_Lecture_Video_24_part1.mp4"],
  ["Full Lecture Video 25 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_25/Full_Lecture_Video_25_part0.mp4"],
  ["Full Lecture Video 25 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_25/Full_Lecture_Video_25_part1.mp4"],
  ["Full Lecture Video 25 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_25/Full_Lecture_Video_25_part2.mp4"],
  ["Full Lecture Video 26 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_26/Full_Lecture_Video_26_part1.mp4"],
  ["Full Lecture Video 27 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_27/Full_Lecture_Video_27_part0.mp4"],
  ["Full Lecture Video 27 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_27/Full_Lecture_Video_27_part1.mp4"],
  ["Full Lecture Video 28 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_28/Full_Lecture_Video_28_part0.mp4"],
  ["Full Lecture Video 29 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_29/Full_Lecture_Video_29_part0.mp4"],
  ["Full Lecture Video 29 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_29/Full_Lecture_Video_29_part1.mp4"],
  ["Full Lecture Video 30 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_30/Full_Lecture_Video_30_part0.mp4"],
  ["Full Lecture Video 30 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_30/Full_Lecture_Video_30_part1.mp4"],
  ["Full Lecture Video 30 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_30/Full_Lecture_Video_30_part2.mp4"],
  ["Full Lecture Video 31 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_31/Full_Lecture_Video_31_part0.mp4"],
  ["Full Lecture Video 31 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_31/Full_Lecture_Video_31_part1.mp4"],
  ["Full Lecture Video 31 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_31/Full_Lecture_Video_31_part2.mp4"],
  ["Full Lecture Video 32 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_32/Full_Lecture_Video_32_part0.mp4"],
  ["Full Lecture Video 32 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_32/Full_Lecture_Video_32_part2.mp4"],
  ["Full Lecture Video 33 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_33/Full_Lecture_Video_33_part0.mp4"],
  ["Full Lecture Video 33 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_33/Full_Lecture_Video_33_part1.mp4"],
  ["Full Lecture Video 33 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_33/Full_Lecture_Video_33_part2.mp4"],
  ["Full Lecture Video 34 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_34/Full_Lecture_Video_34_part0.mp4"],
  ["Full Lecture Video 34 part1","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_34/Full_Lecture_Video_34_part1.mp4"],
  ["Full Lecture Video 34 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_34/Full_Lecture_Video_34_part2.mp4"],
  ["Full Lecture Video 35 part0","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_35/Full_Lecture_Video_35_part0.mp4"],
  ["Full Lecture Video 35 part2","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_35/Full_Lecture_Video_35_part2.mp4"],
  ["Full Lecture Video 35 part3","https://s3-us-west-2.amazonaws.com/classtranscribes3/CHEM233-SP16/Lecture_35/Full_Lecture_Video_35_part3.mp4"],
];

$(document).ready(function () {
  VIDEOS.forEach(function (video, i) {
    var title = video[0];
    var src = video[1];
    var template = '<option class="video-option" value="' + i + '">' + title + '</option>';
    $(".video-selector").append(template);
  });
});

/*
  Loads the selected video
*/
function loadVideo(videoIndex) {
  var videoSrc = VIDEOS[videoIndex][1];
  $(".main-video-source").attr("src", videoSrc);
  $(".main-video").get(0).load();
}