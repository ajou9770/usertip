const videos = ["sono_newvideo.mp4"];

const chosenVideos = videos[Math.floor(Math.random() * videos.length)];

const VideosFrame = document.querySelector("video");

VideosFrame .src = `img/${chosenVideos}`;
