const about_game_container = document.getElementById("about-game-container");
const game_img = document.getElementById("game-main-img");
const hot_to_paly_list = document.getElementById("hot-to-paly-list");
const game_features_list = document.getElementById("game-features-list");
const ios_link_element = document.getElementById("ios-link");
const android_link_element = document.getElementById("android-link");
const previousGameLink = document.getElementById("previous-game-link");
const nextGameLink = document.getElementById("next-game-link");

const params = new URLSearchParams(window.location.search);
let gameName = params.get("game");
if (!gameName) {
  gameName = "Battle";
}

let GAME_DATA = NFT_GAMES_DATA[gameName];

if (!GAME_DATA) {
  GAME_DATA = NFT_GAMES_DATA.Battle;
}

document.title = GAME_DATA.name + " | NFT Game";

const initiade_game_data = () => {
  const h3NameElement = document.createElement("h3");
  h3NameElement.textContent = GAME_DATA.name;

  const h6TitleElement = document.createElement("h6");
  h6TitleElement.textContent = GAME_DATA.title;

  console.log(h3NameElement);
  console.log(h6TitleElement);

  GAME_DATA.about.reverse().forEach((pText) => {
    const aboutPElement = document.createElement("p");
    aboutPElement.textContent = pText;
    about_game_container.prepend(aboutPElement);
  });

  about_game_container.prepend(h6TitleElement);
  about_game_container.prepend(h3NameElement);

  game_img.src = `./imgs/nft-games/${GAME_DATA.img_main}`;

  init_store_download_links();
  init_hot_to_play();
  init_game_features();
  init_prev_next_game_links();
};

const init_store_download_links = () => {
  if (!GAME_DATA.ios) {
    ios_link_element.style.display = "none";
  } else {
    ios_link_element.href = GAME_DATA.ios;
  }

  if (!GAME_DATA.android) {
    android_link_element.style.display = "none";
  } else {
    android_link_element.href = GAME_DATA.android;
  }
};

const init_hot_to_play = () => {
  GAME_DATA.hot_to_play.reverse().forEach((liText) => {
    const li = document.createElement("li");
    li.textContent = liText;

    hot_to_paly_list.prepend(li);
  });
};

const init_game_features = () => {
  GAME_DATA.game_features.reverse().forEach((liText) => {
    const li = document.createElement("li");
    li.textContent = liText;

    game_features_list.prepend(li);
  });
};

const init_prev_next_game_links = () => {
  const gamesNameArr = Object.entries(NFT_GAMES_DATA).map((arr) => arr[0]);

  console.log(gamesNameArr);
  let gameIndex = gamesNameArr.findIndex((gName) => gName === gameName);

  console.log(gameIndex);

  if (gameIndex === -1) {
    gameIndex = 0;
  }

  let prevGameIndex = gameIndex - 1;
  let nextGameIndex = gameIndex + 1;

  if (prevGameIndex < 0) {
    prevGameIndex = gamesNameArr.length - 1;
  }

  if (nextGameIndex > gamesNameArr.length - 1) {
    nextGameIndex = 0;
  }

  let prevGameName = gamesNameArr[prevGameIndex];
  let nextGameName = gamesNameArr[nextGameIndex];

  previousGameLink.href = "./nft-game.html?game=" + prevGameName;
  nextGameLink.href = "./nft-game.html?game=" + nextGameName;
};

initiade_game_data();
