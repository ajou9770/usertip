const videos = ["Beach_bike.mp4","sea_v.mp4", "beach_v.mp4","pado.mp4"];

const chosenVideos = videos[Math.floor(Math.random() * videos.length)];

const VideosFrame = document.querySelector("video");

VideosFrame.src = `img/${chosenVideos}`;
