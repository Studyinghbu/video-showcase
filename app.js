const videos = [
  {
    title: "最终视频",
    src: "./video.mp4",
    poster: "./poster.jpg",
    duration: "01:16",
    details: "720P · MP4",
  },
];

const grid = document.querySelector("#video-grid");
const dialog = document.querySelector("#player-dialog");
const player = document.querySelector("#main-player");
const playerTitle = document.querySelector("#player-title");
const closeButton = document.querySelector("#close-player");

function createVideoCard(video, index) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `播放《${video.title}》`);
  card.innerHTML = `
    <div class="poster-wrap">
      <img class="poster" src="${video.poster}" alt="《${video.title}》视频封面" />
      <span class="play-button" aria-hidden="true"></span>
      <span class="duration">${video.duration}</span>
    </div>
    <div class="card-copy">
      <div>
        <h3>${video.title}</h3>
        <p>${video.details}</p>
      </div>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </div>
  `;

  const open = () => openPlayer(index);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });

  return card;
}

function openPlayer(index) {
  const video = videos[index];
  playerTitle.textContent = video.title;
  player.src = video.src;
  player.poster = video.poster;
  dialog.showModal();
  player.play().catch(() => {
    // Some browsers require a second explicit click before media playback.
  });
}

function closePlayer() {
  player.pause();
  player.removeAttribute("src");
  player.load();
  dialog.close();
}

videos.forEach((video, index) => grid.append(createVideoCard(video, index)));
document.querySelector("#video-count").textContent = videos.length;
document.querySelector("#year").textContent = new Date().getFullYear();

closeButton.addEventListener("click", closePlayer);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closePlayer();
});
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closePlayer();
});
